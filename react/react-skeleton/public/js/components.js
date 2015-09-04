'use strict';

var React = require('react');

var Greeter = React.createClass({
  displayName: 'Greeter',

  render: function render() {
    return React.createElement(
      'h1',
      null,
      'Hello world !!'
    );
  }
});
module.exports = Greeter;
