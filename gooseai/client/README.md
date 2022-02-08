Reference Client Example Code
=============================

Quick steps:
* `go build`

Modes of operation:
* TUI directly against inference via KNative:
```
# ./client fairseq-6-7b-predictor-default.tenant-goosedev-1.knative.chi.coreweave.com:443
```

* TUI via `goose-server`:
```
# GOOSEAI_AUTH=sk-... ./client grpc-dev.goose.ai:443
```

* Load test:
```
# GOOSEAI_AUTH=sk-... ./client --threads=10 grpc-dev.goose.ai:443
```
