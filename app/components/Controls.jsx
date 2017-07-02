var React = require('react')

var Controls = React.createClass({
  onSubmit: function (event) {
    event.preventDefault();
    var text = this.refs.addTodo.value;
    if (text.length > 0) {
      this.refs.addTodo.value = null;
      this.props.onAdd(text);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Controls</h1>
        <input type="text" ref="addTodo" placeholder="Add Todo" />
        <button type="submit" className="button expanded">Submit</button>
      </form>
    );
  }
});

module.exports = Controls;
