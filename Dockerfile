FROM node:16-bullseye as build
RUN apt-get update && apt-get install -y cmake protobuf-compiler libgrpc++1 libgrpc++-dev libgrpc-dev libgrpc10 python3-venv wget && rm -rf /var/lib/apt/lists/*
RUN rm -rf /go && wget https://golang.google.cn/dl/go1.19.1.linux-amd64.tar.gz -qO- | tar -C / -xz
ENV GOPATH=/go
ENV PATH $GOPATH/bin:$PATH
RUN mkdir -p "$GOPATH/src" "$GOPATH/bin" && chmod -R 777 "$GOPATH"
RUN go install github.com/golang/protobuf/protoc-gen-go@v1.5.2
COPY . /build/
WORKDIR /build
RUN cmake . && cmake --build .

FROM debian:bullseye-slim
COPY --from=build /build/gooseai /gooseai