var React = require('react');
var TodoList = require('TodoList');
var Search = require('Search');
var Controls = require('Controls');


var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [{
          id: 1,
          text: "Walk the dog"
        },
        {
          id: 2,
          text: "Mow the yard"
        },
        {
          id: 3,
          text: 'Get mail'
        },
        {
          id: 4,
          text: 'Watch TV'
        }
      ]
    }
  },
  handleAddTodo: function (text) {
    alert('New Todo: ' + text);
  },
  render: function () {
    var { todos } = this.state;
    return (
      <div className="row">
        <div className="columns large-6 medium-4 small-centered align-center">
            <h2>Todo App</h2>
              <div>
                <Search />
                <TodoList todos={todos}/>
                <Controls onAdd={this.handleAddTodo}/>
              </div>
          </div>
      </div>
    );
  },
});

module.exports = TodoApp;
