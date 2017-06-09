# Simple project organization

Each day the experiment for the `hello, world!` will get it's own directory, so the project stays nice and organized. 

Directories should follow the format of:
`Day-{number}-{projectname}`

If a single day has multiple experiments, each experiment should get it's own directory where the day number uses a `semver` style number. E.g., `2.2`

Simple projects-whose codebase is not too complex, and the dependencies aren't high–will live within sub-directories. More complicated projects/expiriments will live in separate repositories, linked into their own directories here as `git submodules`.

