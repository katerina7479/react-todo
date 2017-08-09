var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, { Todo } from 'Todo';
var { configure } = require('configureStore');


describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one todo component for each item', () => {
    var store = configure();
    var todos = [{
        id: 1,
        text: 'Do something',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id: 2,
        text: 'do something else',
        completed: false,
        completedAt: undefined,
        createdAt: 600
      }
    ];
    var store = configure({ todos });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    )
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
    expect(todosComponents.length).toBe(todos.length);

  });
});
