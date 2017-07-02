var React = require('react');
var Todo = require('Todo');


var TodoList = React.createClass({
  getDefaultProps: function () {
    return {

    };
  },
  render: function () {
    return (
      <div>
        <h1>TodoList</h1>
      </div>
    );
  }
});

module.exports = TodoList;
