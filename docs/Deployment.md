Deployment
========

As described already in previous section, the umbrella package defines cross-platform `scripts` written in `shelljs` that are
completely optional, although are here to ease your development workflow. Please see the detailed list below with explanation
for better understanding of all available commands.

For all platform-specific commands, check `package.json`'s in `platforms/<target>/`.

## packages:check

```bash
$ npm run packages:check
```

Checks all dependencies in your `package.json` against latest published versions. 

## packages:update

```bash
$ npm run packages:update
```

Updates all entries in package.json to point to latest versions available. It uses `npm-check-updates` internally.

## install:core

```bash
$ npm run install:core
```

Installs core dependencies. This is default `postinstall` action, so in most cases you don't have to run it separately.

## install:<platform> (web|mobile)

```bash
$ npm run install:web
$ npm run install:mobile
```

Installs web & mobile dependencies.

## test:diff

```bash
$ npm run test:diff
```

Takes list of all folders that have changed since last commit and runs tests in them. If the `core` folder has changed, all platforms are tested
to ensure no side-effects were introduced. No tests will be run for changes in `scripts` folder since we don't have
unit tests in there anyway. Works with `CircleCI`.

This is default `npm test` behaviour. 

## test:all

```bash
$ npm run test:all
```

Tests all targets and core package no matter what files were changed. Useful to run prior release to make sure
all works as expected.

