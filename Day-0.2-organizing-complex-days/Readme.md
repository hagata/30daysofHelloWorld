# Organizing complex days

In some cases, a daily experiment may grow to a really large code base and/or have a long list of dependencies, or tooling that is better kept within it's own repository. In those cases, manage the project within its own repository as a separate project, and add it to the `30days` repo here, within a daily directory as a submodule.

## Adding as a submodule
To add as a submodule, use `git submodule add <link to .git source> <directory>` from the root.

Add an additional `Readme.md` to keep track of the daily experiments within the daily direcroty. This is additional to whatever `Readme.md` that exists within the submodule repository.

The folder structure should be:

```
Root-project-directory
├── Day-{number}-{projectname}
│   └── {submodule-project}
│   └── Readme.md
```

