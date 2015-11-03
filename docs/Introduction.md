React-universal
=======

In the modern era of universal JavaScript applications written in React, our software is often delivered as a service. This includes variety of targets, like web or mobile. The purpose of this proposal is to unify efforts of building such applications so they:
- Are **organized in a clean, declarative way** that is understandable by every developer joining in a new project
- Are **suitable for deployment on different targets** with no to minimum changes in the common code-base
- **Minimize divergence** between different targets by utilizing continuous integration for maximum developer experience
- **Extract common logic and components** for maximum re-usability resulting in a more stable ecosystem
- Are **extensible and open for future improvements** without significant changes to tooling and practices used

On top of that, it provides maximum developer experience by utilizing Redux, its tooling and hot-code-replacement where possible.

It is a collection of `proto-patterns` that are likely to be altered and adjusted as we keep developing new applications and are subject to further community proposals. Once core set is established, fully featured set of patterns with their purpose, problem to solve and other patterns composed is to be formed.


## Motivation

I wrote this document while preparing for Reactive 2015 conference and brainstorming some ideas to present. My goal was to unify different tooling and group all best practices in one place so that it is easier to write applications that speak JavaScript with minimum effort and without a need to use, often too much opinionated starter kits. This document is acting as a set of useful tips and expects some of the currently popular starter kits to become compliant with it.

## Influences

This proposal is highly influenced by the work done in both React & React Native communities. If you were following Reactiflux for quite a long, some of these ideas may already sound familiar to you.

## Thanks

I would like to thank the whole React & Native community, especially:
- Daniel Steigerwald (@steida) for all the work we've done in @este/common - it's been a great journey that made this proposal possible
- Andre Staltz (@staltz) for all the reactive functional talks, especially about human-computer interaction that were the main inspiration and motivation behind grouping different targets into one place
- Brent Vatne (@notbrent) for all the help with reducing the gap between web & native
- James Ide (@JI) for being a community patron, tremendous help with React Native releases and making it a better environment for all of us

## Similar solutions

This package is heavily based on `este/este` project, with an exception that here dependencies are not defined in a single `package.json` for the sake of development and to utilize some more advanced CI patterns. If you prefer having a single source of dependencies as your app is not growing yet - give it a go.

## License

MIT
