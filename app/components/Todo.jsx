var React = require('react')

var Todo = React.createClass({

  render: function () {
    var { id, text } = this.props;
    return (
      <div>
        <input id="{id}" type="checkbox"/>
        <label htmlFor="{id}">{id}. {text}</label>
        <p>Time</p>
      </div>
    );
  }
});

module.exports = Todo;
