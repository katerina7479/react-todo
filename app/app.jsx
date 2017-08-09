var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('TodoApp');
var { Provider } = require('react-redux');

var actions = require('Actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State', store.getState());
})

// Load foundation
$(document).foundation();

//Load css
require('style!css!foundation-sites/dist/foundation.min.css')
require('style!css!sass!applicationStyle')

// Call it
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
