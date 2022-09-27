FROM node:16-bullseye as builder
RUN apt-get update && apt-get install -y cmake git build-essential libgrpc++1 libgrpc++-dev libgrpc-dev libgrpc10 python3-venv wget && rm -rf /var/lib/apt/lists/*

# Install golang 
RUN rm -rf /go && wget https://go.dev/dl/go1.19.1.linux-amd64.tar.gz -qO- | tar -C / -xz
ENV GOPATH=/go
ENV PATH $GOPATH/bin:$PATH
RUN mkdir -p "$GOPATH/src" "$GOPATH/bin" && chmod -R 777 "$GOPATH"
RUN mkdir -p /build

# Build protobuf
WORKDIR /build
RUN git clone --recurse-submodules -b v21.6 --depth 1 --shallow-submodules https://github.com/protocolbuffers/protobuf.git && cd protobuf
WORKDIR /build/protobuf/cmake
RUN cmake . && cmake --build . --parallel 10 && cmake --install .

# Build api-interfaces
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28.1
COPY . /build/api-interfaces/
RUN cd /build/api-interfaces && cmake . && cmake --build .

# Copy output to a bare container
FROM debian:bullseye-slim
COPY --from=builder /build/api-interfaces/gooseai /gooseai