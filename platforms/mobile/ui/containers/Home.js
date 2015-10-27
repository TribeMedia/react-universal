import React, {Text, View, TouchableOpacity} from 'react-native';
import PureComponent from '../../../../core/ui/components/PureComponent';
import {view, text} from '../styles';

export default class Home extends PureComponent {

  static propTypes = {
    actions: React.PropTypes.object,
    intl: React.PropTypes.object,
    msg: React.PropTypes.object
  }

  render() {
    const {
      actions: {intl: actions},
      msg: {home: msg},
      intl
    } = this.props;

    return (
      <View style={view.centered}>
        <Text style={[text.heading, {margin: 10}]}>
          {msg.heading}
        </Text>
        <Text style={text.paragraph}>
          {msg.getStarted}
        </Text>
        <Text style={[text.paragraph, {marginBottom: 20}]}>
          {msg.devTools}
        </Text>

        {intl.availableLanguages.map(lang =>
          <TouchableOpacity onPress={_ => actions.selectLanguage(lang)} style={text.button}>
            <Text>{lang}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

}
