var React = require('react')
var { connect } = require('react-redux');
var moment = require('moment');
var actions = require('Actions');


export var Todo = React.createClass({

  render: function () {
    var { id, text, completed, createdAt, completedAt, dispatch } = this.props;
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
      <div className={todoClassName} onClick={() => {
        dispatch(actions.toggleTodo(id));
      }}>
        <div>
          <input id="{id}" type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo_subtext">
            Created: {renderDate(createdAt)}
          </p>
          {renderCompleted()}
        </div>
      </div>
    );
  }
});

export default connect()(Todo);
