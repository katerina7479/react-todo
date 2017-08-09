var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('Reducers');
var moment = require('moment');


describe('Reducers', () => {
  describe('Search text Reducer', () => {
    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });
  describe('Show Completed Reducer', () => {
    it('should toggle show Completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toEqual(false);
    });
  });
  describe('Todos reducer', () => {
    it('should add new todos', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Thing I want to do'
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
    it('should toggle todos', () => {
      var todos = [
        { id: 1, text: "Feed Dog", completed: false, createdAt: moment().unix() },
        { id: 2, text: "Water Plants", completed: false, createdAt: moment().unix() },
      ]
      var action = {
        type: 'TOGGLE_TODO',
        id: 2
      };
      var res = reducers.todosReducer(df(todos), df(action));
      expect(res.length).toEqual(2);
      expect(res[1].text).toEqual("Water Plants");
      expect(res[1].completed).toEqual(true);

    });
  });

});
