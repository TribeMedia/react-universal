import React, {PropTypes, StyleSheet, TextInput, View} from 'react-native';
import PureComponent from '../../../../core/ui/components/PureComponent';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CDCDCD',
    height: 62
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default class NewTodo extends PureComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    msg: PropTypes.object.isRequired
  }

  state = {
    text: ''
  }

  handleSubmit() {
    const input = this.state.text.trim();

    if (input.length > 0) {
      this.props.actions.addTodo(this.state.text);
      this.setState({text: ''});
    }
  }

  render() {
    const {msg} = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.setState({text})}
          onEndEditing={this.handleSubmit.bind(this)}
          placeholder={msg.placeholder}
          placeholderTextColor={'gray'}
          style={styles.input}
          value={this.state.text}
        />
      </View>
    );
  }

}
