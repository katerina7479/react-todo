var React = require('react');
var TodoList = require('TodoList');
var Search = require('Search');
var Controls = require('Controls');


var TodoApp = (props) => {
  return (
    <div className="row">
      <div className="columns large-6 medium-4 small-centered align-center">
          <h2>TodoApp</h2>
            <div>
              <Search />
              <TodoList />
              <Controls />
            </div>
        </div>
    </div>
  );
};

module.exports = TodoApp;
