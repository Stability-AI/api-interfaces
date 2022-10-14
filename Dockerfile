ARG NODE_IMAGE_TAG=16-bullseye
FROM node:${NODE_IMAGE_TAG} as builder
ARG GOLANG_VERSION=1.18.6
ARG GOLANG_PACKAGE=https://go.dev/dl/go${GOLANG_VERSION}.linux-amd64.tar.gz
ARG PROTOC_GEN_GO_VERSION=v1.28.1
ARG PROTOC_GEN_GO_GRPC_VERSION=v1.1.0
ARG GRPC_VERSION=v1.50.0
# In newer versions of gRPC, the protoc-gen-js plugin has been moved to a separate repository
# https://github.com/protocolbuffers/protobuf-javascript/releases
ARG PROTOBUF_JAVASCRIPT_VERSION=3.21.2

# Install python and build tools from apt
RUN apt-get update && apt-get install -y cmake git build-essential python3-venv wget && rm -rf /var/lib/apt/lists/*

# Install golang from binary package
RUN rm -rf /go && wget ${GOLANG_PACKAGE} -qO- | tar -C / -xz
ENV GOPATH=/go
ENV PATH $GOPATH/bin:$PATH
RUN mkdir -p "$GOPATH/src" "$GOPATH/bin" && chmod -R 777 "$GOPATH"
RUN mkdir -p /build

# Build gRPC
WORKDIR /build
RUN git clone --recurse-submodules -b ${GRPC_VERSION} --depth 1 --shallow-submodules https://github.com/grpc/grpc
WORKDIR /build/grpc
RUN mkdir -p cmake/build; cd cmake/build; cmake -DgRPC_INSTALL=ON -DgRPC_BUILD_TESTS=OFF -DCMAKE_INSTALL_PREFIX=/usr/local ../.. && make -j 8 && make install

# Install protoc-gen-js
WORKDIR /build/protoc-gen-js
RUN wget -O protobuf-javascript.zip https://github.com/protocolbuffers/protobuf-javascript/releases/download/v${PROTOBUF_JAVASCRIPT_VERSION}/protobuf-javascript-${PROTOBUF_JAVASCRIPT_VERSION}-linux-x86_64.zip && \
    unzip protobuf-javascript.zip -d ./protobuf-javascript && \
    mv ./protobuf-javascript/bin/protoc-gen-js /usr/local/bin && \
    rm -rf ./protobuf-javascript && \
    rm protobuf-javascript.zip

# Build api-interfaces
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@${PROTOC_GEN_GO_VERSION}
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@${PROTOC_GEN_GO_GRPC_VERSION}

COPY CMakeLists.txt package.json package-lock.json requirements.txt /build/api-interfaces/
COPY .git /build/api-interfaces/.git/
COPY src/ /build/api-interfaces/src/
COPY gooseai/ /build/api-interfaces/gooseai/
WORKDIR /build/api-interfaces
RUN cmake . && make clean && cmake --build .

# Copy output to a bare container
FROM scratch
COPY --from=builder /build/api-interfaces/gooseai /gooseai
