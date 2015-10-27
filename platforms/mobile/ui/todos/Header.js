import React, {Text, View} from 'react-native';
import PureComponent from '../../../../core/ui/components/PureComponent';
import {format} from '../../../../core/utils/msg';
import {text, view} from '../styles';

export default class Header extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.object.isRequired,
    todos: React.PropTypes.array.isRequired
  }

  render() {
    const {todos, msg} = this.props;
    const leftTodos = todos.filter(todo => !todo.completed).length;

    return (
      <View style={view.sectionHeader}>
        <Text style={text.sectionHeader}>
          {(format(msg.numberLeft, {size: leftTodos}))}
        </Text>
      </View>
    );
  }

}
