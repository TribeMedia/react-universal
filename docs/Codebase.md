# Codebase

A single repository (in a centralized version control system like Subversion) or set of repositories that share a root commit (in a decentralized version control system like git) that contains entire application. The codebase is always the same across all deployments, although different versions may be active in each of them. For instance, staging or development can contain commits not yet deployed to production. However, they all share the same codebase which makes them fully compliant with this document.

## Platform

Each application should be made of multiple independent packages, including the ones described below. There are no assumptions on how your final code is structured as long as it meets the following requirements. This results in a freedom on how the targets load core part. No matter what way is chosen by the team of developers, it should be consistent across all the targets for maximum clarity.

> **Note on `npm link`**

> Symlinks are considered anti-pattern at the time of writing, since `react-packager` does not respect them (well, technically speaking it's an issue with `watchman`, being discussed already). Use explicit relative require or webpack config to mimick that functionallity.

### Target

An independent package of your application that contains platform-specific dependencies and code exclusively. Cross-target module references should be avoided since they violate isolation and make specific parts of your application no longer encapsulated. It is acceptable for the target to contain some additional backing services, like database engine or server to host static files when necessary although they should be fully independent from other targets.

### Core

A set of common, platform-agnostic dependencies and logic that always run on all platforms no matter what are its requirements. It should contain state management, actions and other, implementation-specific components (reusable React components, `Redux` action constants or creators). Core defines all parts of your application that are common to all targets and should not contain any dead code or target-specific behavior. Core package should expose interface other targets can use and interact with.

> **Note on `Redux`**

> For all the parts that are subject to multiple targets (like action creators or reducers), they should be extracted into Core. Targets should compose reducers into a top level one separately, optionally adding / or replacing them with their custom implementations. It is advisable for the targets to conditionally load their own middlewares and store enhancers since they are subject to platform-specific features.

### Umbrella

Optionally, all your targets as well as core package should be wrapped in a umbrella package serving as an entry-point to all underlying targets. It should only contain generic dev dependencies and helper tasks, like `npm test:diff`. It can optionally delegate some tasks to underlying targets for maximum developer experience (e.g. `npm run web:start` instead of `cd web && npm start`). Since most of the continuous integration platforms expect their manifest to be placed in the root folder of your app (e.g. `circleci.yml`), that is also the place where all these declarations should be held.

> **Note on `Webpack`**

> Although Webpack is used by `web` platform exclusively, it has been put in the top-level folder along the `babel-loader` package to avoid issues with `core` folder being preprocessed with babel. 

## Dependencies

Our application, just like twelve-factor one, does not rely on implicit existence of system-wide packages. That means all dependencies should be declared via a dependency declaration manifest.

There are a couple of benefits of explicit dependency declaration, including:
- Easier and clearer overview of needed packages to build and run given target. 
- Greatly reduced effort needed by the developer to jump into the project by requiring only the language runtime and dependency manager to be installed prior starting the work
- Faster deployments by reducing number of targets to install, build & test when different build pipelines are utilized

Another highly important factor to take into consideration is development of platform-dependent targets - say `React Native iOS` application. It's often the case that your entire team works on different systems, like Windows or Linux just to name few. When one of your targets depend on system-exclusive tooling, like `XCode` shell available on `OS X`, it may result in errors and warnings about unsupported platform during package installation.

By making targets truly isolated and independent, your codebase is guaranteed to work on all platforms possible and be multiple-teams friendly.
 

