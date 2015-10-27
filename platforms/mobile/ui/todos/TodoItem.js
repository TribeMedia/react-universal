import React, {Image, PropTypes, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {view} from '../styles';
import PureComponent from '../../../../core/ui/components/PureComponent';

const baseInputStyle = {
  color: '#7C7C7C',
  fontSize: 16,
  flex: 1
};

const styles = StyleSheet.create({
  input: baseInputStyle,
  inputCompleted: {
    ...baseInputStyle,
    opacity: 0.6
  },
  checkbox: {
    width: 30,
    resizeMode: 'contain',
    marginLeft: 15,
    marginRight: 15
  }
});

export default class TodoItem extends PureComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired
  }

  render() {
    const {actions, todo} = this.props;

    const image = todo.completed
      ? require('image!SelectedCheckbox')
      : require('image!EmptyCheckbox');

    const inputStyle = todo.completed
      ? styles.inputCompleted
      : styles.input;

    return (
      <View style={view.horizontal}>
        <TouchableOpacity
          activeOpacity={.8}
          onPress={() => actions.completeTodo(todo.id)}>
          <Image source={image} style={styles.checkbox} />
        </TouchableOpacity>

        <TextInput
          clearButtonMode='while-editing'
          onChangeText={text => actions.editTodo(todo.id, text)}
          onEndEditing={() => !todo.text && actions.deleteTodo(todo.id)}
          style={inputStyle}
          value={todo.text}
          style={inputStyle}
        />
      </View>
    );
  }

}
