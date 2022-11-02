ARG NODE_IMAGE_TAG=16-bullseye
FROM --platform=linux/amd64 node:${NODE_IMAGE_TAG} as builder
ARG GOLANG_VERSION=1.18.6
ARG GOLANG_PACKAGE=https://go.dev/dl/go${GOLANG_VERSION}.linux-amd64.tar.gz
ARG GRPC_VERSION=v1.48.2
ARG PROTOC_GEN_GO_VERSION=v1.28.1
ARG PROTOC_GEN_GO_GRPC_VERSION=v1.1.0

# Install python and build tools from apt
RUN apt-get update && apt-get install -y cmake git build-essential python3-venv wget && rm -rf /var/lib/apt/lists/*

# Install golang from binary package
RUN rm -rf /go && wget ${GOLANG_PACKAGE} -qO- | tar -C / -xz
ENV GOPATH=/go
ENV PATH $GOPATH/bin:$PATH
RUN mkdir -p "$GOPATH/src" "$GOPATH/bin" && chmod -R 777 "$GOPATH"
RUN mkdir -p /build

# Build GRPC; note this issue before updating: https://github.com/protocolbuffers/protobuf-javascript/issues/127
WORKDIR /build
RUN git clone --recurse-submodules -b ${GRPC_VERSION} --depth 1 --shallow-submodules https://github.com/grpc/grpc
WORKDIR /build/grpc
RUN mkdir -p cmake/build; cd cmake/build; cmake -DgRPC_INSTALL=ON -DgRPC_BUILD_TESTS=OFF -DCMAKE_INSTALL_PREFIX=/usr/local ../.. && make -j 8 && make install

# Build api-interfaces
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@${PROTOC_GEN_GO_VERSION}
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@${PROTOC_GEN_GO_GRPC_VERSION}

COPY package.json package-lock.json requirements.txt /build/api-interfaces/
COPY .git /build/api-interfaces/.git/
COPY src/ /build/api-interfaces/src/
COPY gooseai/ /build/api-interfaces/gooseai/
WORKDIR /build/api-interfaces
COPY CMakeLists.txt /build/api-interfaces/
RUN cmake .
RUN make clean && cmake --build .

# Copy output to a bare container
FROM debian:bullseye-slim
COPY --from=builder /build/api-interfaces/gooseai /gooseai
