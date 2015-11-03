import React from 'react-native';
import {connect} from 'react-redux/native';
import ExNavigator from '@exponent/react-native-navigator';
import cloneReferencedElement from 'react-native-clone-referenced-element';
import router from '../router';

// Load actions
import * as device from '../../redux/device/actions';

// Core method makeActions
import bindActionsToDispatch from '../../../../core/redux/bindActionsToDispatch';

function mapStateToProps(state) {
  return {
    ...state,
    msg: state.intl.msg
  };
}

const mapDispatchToProps = bindActionsToDispatch({device});

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {

  augmentScene(scene) {
    return cloneReferencedElement(scene, {...this.props});
  }

  render() {
    return (
      <ExNavigator
        augmentScene={this.augmentScene.bind(this)}
        initialRoute={router.getTodosRoute()}
        sceneStyle={{paddingTop: 64}}
      />
    );
  }
}
