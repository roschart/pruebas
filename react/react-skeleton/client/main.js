var React = require('react');

var Greeter = React.createClass({
  render: function() {
    return (
      <h1>Hello world!!</h1>
    );
  }
});

React.render(<Greeter/>, document.body);