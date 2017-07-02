var React = require('react')

var Controls = React.createClass({
  onSubmit: function (event) {
    event.preventDefault();
    var text = this.refs.todoText.value;

    if (text.length > 0) {
      this.refs.todoText.value = null;
      this.props.onAddTodo(text);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="Add Todo" />
          <button type="submit" className="button expanded">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = Controls;
