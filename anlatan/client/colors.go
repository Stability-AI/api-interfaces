package main

import "code.rocketnine.space/tslocum/cview"

func main() {
	app := cview.NewApplication()

	tv := cview.NewTextView()
	tv.SetBorder(true)
	tv.SetTitle("Hello, world!")
	tv.SetText("Lorem ipsum dolor sit amet")

	app.SetRoot(tv, true)
	if err := app.Run(); err != nil {
		panic(err)
	}
}
