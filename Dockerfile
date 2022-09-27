FROM node:16-bullseye as builder
RUN apt-get update && apt-get install -y cmake git build-essential python3-venv wget && rm -rf /var/lib/apt/lists/*

# Install golang 
RUN rm -rf /go && wget https://go.dev/dl/go1.19.1.linux-amd64.tar.gz -qO- | tar -C / -xz
ENV GOPATH=/go
ENV PATH $GOPATH/bin:$PATH
RUN mkdir -p "$GOPATH/src" "$GOPATH/bin" && chmod -R 777 "$GOPATH"
RUN mkdir -p /build

# Build GRPC; note this issue before updating: https://github.com/protocolbuffers/protobuf-javascript/issues/127
WORKDIR /build
RUN git clone --recurse-submodules -b v1.48.2 --depth 1 --shallow-submodules https://github.com/grpc/grpc
WORKDIR /build/grpc
RUN mkdir -p cmake/build; cd cmake/build; cmake -DgRPC_INSTALL=ON -DgRPC_BUILD_TESTS=OFF -DCMAKE_INSTALL_PREFIX=/usr/local ../.. && make -j 8 && make install

# Build api-interfaces
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1.0
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28.1

COPY . /build/api-interfaces/
WORKDIR /build/api-interfaces
RUN cmake . && cmake --build .

# Copy output to a bare container
FROM debian:bullseye-slim
COPY --from=builder /build/api-interfaces/gooseai /gooseai