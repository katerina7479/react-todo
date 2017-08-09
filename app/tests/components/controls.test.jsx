var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import { Controls } from 'Controls';


describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  it('should dispatch ADD_TODO with data', () => {
    var todoText = 'Check mail';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    }
    var spy = expect.createSpy();
    var controls = TestUtils.renderIntoDocument(<Controls dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(controls));
    controls.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO with invalid data', () => {
    var todoText = '';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    }
    var spy = expect.createSpy();
    var controls = TestUtils.renderIntoDocument(<Controls dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(controls));
    controls.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
