var React = require('react')
var moment = require('moment');

var Todo = React.createClass({

  render: function () {
    var { id, text, completed, createdAt, completedAt } = this.props;
    var renderDate = (timestamp) => {
      return moment.unix(timestamp).format('MMM Do, YYYY h:mm:ss a')
    };
    var renderCompleted = () => {
      if (completed) {
        return <p>Completed: {renderDate(completedAt)}</p>
      }
    }
    return (
      <div onClick={() => {
        this.props.onToggle(id)
      }}>
        <label>
        <input id="{id}" type="checkbox" checked={completed} />
          {text}
        </label>
        <p>Created: {renderDate(createdAt)}</p>
        {renderCompleted()}
      </div>
    );
  }
});

module.exports = Todo;
