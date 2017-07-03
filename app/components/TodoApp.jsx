var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoAPI = require('TodoAPI')
var TodoList = require('TodoList');
var Search = require('Search');
var Controls = require('Controls');


var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: TodoAPI.getTodos(),
      showCompleted: false,
      searchText: '',
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    var newTodos = this.state.todos;
    this.setState({
      todos: [...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined,
        }
      ]
    })
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo
    });
    this.setState({
      todos: updatedTodos,
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase(),
    })
  },
  render: function () {
    var { todos, showCompleted, searchText } = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div className="row">
        <div className="columns large-6 medium-4 small-centered align-center">
            <h2>Todo App</h2>
              <div>
                <Search onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <Controls onAddTodo={this.handleAddTodo}/>
              </div>
          </div>
      </div>
    );
  },
});

module.exports = TodoApp;
