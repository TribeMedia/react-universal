import React, {Image,  ScrollView, StyleSheet, Text, View} from 'react-native';
import PureComponent from '../../../../core/ui/components/PureComponent';
import Buttons from './Buttons';
import Todo from './TodoItem';
import {view} from '../styles';

const styles = StyleSheet.create({
  noTodosText: {
    color: '#aaa',
    fontSize: 20
  },
  icon: {
    height: 70,
    marginBottom: 10,
    width: 70
  },
  row: {
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10
  }
});

export default class List extends PureComponent {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    todos: React.PropTypes.array.isRequired
  }

  render() {
    const {actions, todos, msg} = this.props;
    const hasCompletedTodos = todos.filter(todo => todo.completed).length > 0;

    if (todos.length === 0)
      return (
        <View style={[view.centered, view.vertical]}>
          <Image
            source={require('image!Empty State')}
            style={styles.icon}
          />
          <Text style={styles.noTodosText}>
            {msg.empty}
          </Text>
        </View>
      );

    return (
      <ScrollView>
        {todos.map(todo =>
          <View key={todo.id} style={styles.row}>
            <Todo actions={actions} todo={todo} />
          </View>
        )}
        <Buttons
          actions={actions}
          hasCompletedTodos={hasCompletedTodos}
          msg={msg.buttons}
        />
      </ScrollView>
    );
  }

}
