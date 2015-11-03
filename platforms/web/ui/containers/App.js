import React from 'react';
import {connect} from 'react-redux';

// Core method makeActions
import bindActionsToDispatch from '../../../../core/redux/bindActionsToDispatch';
import mapStateToProps from '../../../../core/redux/mapStateToProps';

@connect(mapStateToProps, bindActionsToDispatch())
export default class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.object.isRequired
  }

  render() {
    const {children, ...passProps} = this.props;

    return (
      <div>
        {React.cloneElement(children, passProps)}
      </div>
    );
  }

}
