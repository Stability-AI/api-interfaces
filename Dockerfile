FROM golang:1.17-alpine as builder
EXPOSE 80
EXPOSE 443
EXPOSE 40000
ENV CGO_ENABLED 0
ENV GOPATH /go
ARG ssh_prv_key
ARG ssh_pub_key
RUN apk update
RUN apk add --no-cache --virtual .build-deps \
	alpine-sdk \
	cmake \
	sudo \
	libssh2 libssh2-dev \
	git \
	dep \
	bash \
	curl \
        openssh \
        ncurses

# Authorize SSH Host
RUN mkdir -p /root/.ssh && \
    chmod 0700 /root/.ssh && \
    ssh-keyscan github.com > /root/.ssh/known_hosts

# Add the keys and set permissions
RUN echo "${ssh_prv_key}" > /root/.ssh/id_rsa && \
    echo "${ssh_pub_key}" > /root/.ssh/id_rsa.pub && \
    chmod 600 /root/.ssh/id_rsa && \
    chmod 600 /root/.ssh/id_rsa.pub

# Set things up so that github works with go get.
RUN eval $(ssh-agent) && \
    ssh-keyscan -H github.com >> /etc/ssh/ssh_known_hosts
RUN git config --global url.git@github.com:.insteadOf https://github.com/

# Grab our debugger
WORKDIR /go/src/
RUN go install github.com/go-delve/delve/cmd/dlv@latest

RUN mkdir -p /go/src/github.com/gooseai/interfaces/

WORKDIR /go/src/github.com/gooseai/interfaces/

COPY . .

WORKDIR /go/src/github.com/gooseai/interfaces/gooseai/client

RUN go get
RUN go build .

# Build done, so make our actual deployment container.

FROM alpine:3.15.0
ENV GOPATH /go
RUN apk add --no-cache ncurses
RUN mkdir -p /go/bin
#COPY --from=builder /usr/share/tabset /usr/share/tabset
#COPY --from=builder /usr/bin/infocmp /usr/bin/infocmp
COPY --from=builder /go/src/github.com/gooseai/interfaces/gooseai/client/client /go/bin/goose-client
WORKDIR /go/bin
ENTRYPOINT ["./goose-client"]
