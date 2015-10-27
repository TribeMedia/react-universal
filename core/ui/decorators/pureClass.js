import shallowCompare from 'react-addons-shallow-compare';

// Pure component for some perf. optimisations
// For the sake of demo, there's no Immutable nor PureComponent
// For full list of patterns and use-cases see `este/este`
export default function pureClass(Component) {
  Component.prototype.shouldComponentUpdate = function(...args) {
    shallowCompare(this, ...args);
  };

  return Component;
}
