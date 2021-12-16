package main

import (
	"github.com/siongui/goef"
)

func main() {
	err := goef.GenerateGoPackage("main", "../resources", "../resources.go")
	if err != nil {
		panic(err)
	}
}
