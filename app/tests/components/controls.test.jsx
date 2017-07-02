var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Controls = require('Controls');


describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  it('should call onAddTodo with data', () => {
    var todoText = 'Check mail';
    var spy = expect.createSpy();
    var controls = TestUtils.renderIntoDocument(<Controls onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(controls));
    controls.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onAddTodo with invalid data', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var controls = TestUtils.renderIntoDocument(<Controls onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(controls));
    controls.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
