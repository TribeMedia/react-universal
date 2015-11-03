import React from '../react';
import Component from '../components/PureComponent';
import {wrapDisplayName} from 'recompose';

export default function fetch(action) {

  return Wrapped => class FetchComponent extends Component {

    static propTypes = {
      dispatch: React.PropTypes.func,
      location: React.PropTypes.object,
      params: React.PropTypes.object
    }

    static displayName = wrapDisplayName(Component, 'fetch')

    // This enables server side fetching.
    static fetchAction = action;

    // This enables client side fetching, method is called only in browser.
    componentDidMount() {
      // Dispatch is injected by react-redux.
      // React router injects location and params for every routed component.
      const {dispatch, location, params} = this.props;
      dispatch(action({location, params}));
    }

    render() {
      return <Wrapped {...this.props} />;
    }

  };

}
