var React = require('react');
var { connect } = require('react-redux');
var actions = require('Actions');


export var Controls = React.createClass({
  onSubmit: function (event) {
    var { dispatch } = this.props;
    event.preventDefault();
    var text = this.refs.todoText.value;

    if (text.length > 0) {
      this.refs.todoText.value = null;
      dispatch(actions.addTodo(text))
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container_footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="Add Todo" />
          <button type="submit" className="button expanded">Submit</button>
        </form>
      </div>
    );
  }
});

export default connect()(Controls);
