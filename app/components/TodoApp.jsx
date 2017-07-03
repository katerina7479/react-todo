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
      ],
      showCompleted: false,
      searchText: '',
    };
  },
  handleAddTodo: function (text) {
    var newTodos = this.state.todos;
    var newId = newTodos[newTodos.length - 1].id + 1;
    newTodos.push({
      id: newId,
      text: text
    })
    this.setState({
      todos: newTodos
    })
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase(),
    })
  },
  render: function () {
    var { todos } = this.state;
    return (
      <div className="row">
        <div className="columns large-6 medium-4 small-centered align-center">
            <h2>Todo App</h2>
              <div>
                <Search onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <Controls onAddTodo={this.handleAddTodo}/>
              </div>
          </div>
      </div>
    );
  },
});

module.exports = TodoApp;
