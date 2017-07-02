var React = require('react')

var Todo = React.createClass({

  render: function () {
    return (
      <div>
        <input type="checkbox"/>
        <p>Time</p>
      </div>
    );
  }
});

module.exports = Todo;
