import React, {PropTypes, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PureComponent from '../../../../core/ui/components/PureComponent';

const styles = StyleSheet.create({
  buttons: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  listButton: {
    flex: 1,
    paddingBottom: 15,
    paddingTop: 15
  },
  listButtonText: {
    color: '#C1C1C1',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default class TodoButtons extends PureComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    hasCompletedTodos: PropTypes.bool.isRequired,
    msg: PropTypes.object.isRequired
  }

  renderButton(action, text) {
    return (
      <TouchableOpacity
        activeOpacity={.9}
        onPress={action}
        style={styles.listButton}>
        <Text style={styles.listButtonText}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {actions, hasCompletedTodos, msg} = this.props;

    return (
      <View style={styles.buttons}>
        {hasCompletedTodos
          ? this.renderButton(actions.clearCompleted, msg.clearCompleted)
          : this.renderButton(actions.completeAll, msg.completeAll)
        }
      </View>
    );
  }

}
