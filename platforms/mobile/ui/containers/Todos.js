import React, {View} from 'react-native';
import TodoList from '../todos/List';
import NewTodo from '../todos/NewTodo';
import TodoHeader from '../todos/Header';
import PureComponent from '../../../../core/ui/components/PureComponent';
import {view} from '../styles';

export default class Todos extends PureComponent {

  static propTypes = {
    actions: React.PropTypes.object,
    msg: React.PropTypes.object,
    todos: React.PropTypes.array
  }

  render() {
    const {actions, todos, msg: {todos: msg}} = this.props;

    return (
      <View style={view.centered}>
        <NewTodo actions={actions.todos} msg={msg.newTodo} />
        <TodoHeader msg={msg.todoHeader} todos={todos} />
        <TodoList actions={actions.todos} msg={msg.list} todos={todos} />
      </View>
    );
  }
}
