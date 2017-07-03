var React = require('react')
var moment = require('moment');

var Todo = React.createClass({

  render: function () {
    var { id, text, completed, createdAt, completedAt } = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = (timestamp) => {
      return moment.unix(timestamp).format('MMM Do, YYYY h:mm:ss a')
    };
    var renderCompleted = () => {
      if (completed) {
        return <p className="todo_subtext">Completed: {renderDate(completedAt)}</p>
      }
    }
    return (
      <div className={todoClassName} onClick={() => {this.props.onToggle(id)}}>
        <input id="{id}" type="checkbox" checked={completed} />
        <div>
          <p>{text}</p>
          <p className="todo_subtext">Created: {renderDate(createdAt)}</p>
          {renderCompleted()}
        </div>
      </div>
    );
  }
});

module.exports = Todo;
