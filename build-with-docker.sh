#!/bin/bash

set -euo pipefail
scriptdir=$(cd $(dirname $0) && pwd)

# Enable docker buildkit in order to use the --output flag
export DOCKER_BUILDKIT=1

docker build --output type=local,dest=$scriptdir $scriptdir
