import React from 'react';

export default class Home extends React.Component {

  static propTypes = {
    actions: React.PropTypes.object,
    intl: React.PropTypes.object,
    msg: React.PropTypes.object
  }

  render() {
    const {
      msg: {home: msg}
    } = this.props;

    return (
      <div>
        {msg.heading}
      </div>
    );
  }

}
