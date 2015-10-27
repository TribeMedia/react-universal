let React;

// Use that annoying somehow error-prone pattern to detect React version
// before react-native ships with React 0.14 not vendored
// For some basic non-rendered things, like PureComponent or HOCs that define
// lifecycle that should be `just fine`.
try {

  // React-Native exposes some internal APIs globally (they do not resolve to node_modules)
  // so we detect it inside that try-catch statement
  // and then, we require `React`. (note capital letter).
  require('Platform');
  React = require('React');
}
catch (err) {
  React = require('react');
}

export default React;
