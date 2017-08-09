var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import { Search } from 'Search';

describe('Search', () => {
  it('should exist', () => {
    expect(Search).toExist();
  });
  it('should dispatch action SET_SEARCH_TEXT on text input', () => {
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    }
    var todoSearch = TestUtils.renderIntoDocument(<Search dispatch={spy}/>)

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(action);
  });
  it('should dispatch action TOGGLE_SHOW_COMPLETED on checkbox change', () => {
    var spy = expect.createSpy();
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var todoSearch = TestUtils.renderIntoDocument(<Search dispatch={spy}/>)

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
