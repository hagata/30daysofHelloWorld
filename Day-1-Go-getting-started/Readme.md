# Tiny spaghetti Go web

This is an example use of Go's native `net/http` package along with `gin` to setup and serve a basic web server with a couple routes. 
The "app" simply displays a template with an input form which `POST`'s to one of the app routers and re-renders the template with the passed through data.

## Given more time
- have older entries persist in the DOM
- Render small snippet-templates with an append child like function on submit
- use a small database of someking to keep a log of past message across sessions.
