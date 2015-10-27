import React, {Text, View} from 'react-native';
import {connect} from 'react-redux/native';
import getInObject from 'lodash.get';
import {view, text} from '../styles';

@connect(state => ({msg: state.intl.msg}))
export default class Header extends React.Component {

  static propTypes = {
    msg: React.PropTypes.object.isRequired,
    title: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <View style={view.centered}>
        <Text style={text.heading}>
          {getInObject(this.props.msg, this.props.title)}
        </Text>
      </View>
    );
  }

}
