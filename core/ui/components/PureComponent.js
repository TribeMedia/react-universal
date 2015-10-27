import React from '../react';
import shallowCompare from 'react-addons-shallow-compare';

export default class PureComponent extends React.Component {

  shouldComponentUpdate(...args) {
    return shallowCompare(this, ...args);
  }

}
