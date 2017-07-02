var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('TodoApp');


//Load css
require('style!css!foundation-sites/dist/foundation.min.css')
require('style!css!sass!applicationStyle')
$(document).foundation();

// Call it
ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
