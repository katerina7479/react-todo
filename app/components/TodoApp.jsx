var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import Controls from 'Controls';
import Search from 'Search';

var TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column large-5 medium-6 small-centered">
              <div className="container">
                <Search />
                <TodoList />
                <Controls />
              </div>
          </div>
      </div>
    </div>
    );
  },
});

module.exports = TodoApp;
