var expect = require('expect');
var reducers = require('Reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer('', action);
      expect(res).toEqual(action.searchText);
    });
  });
  describe('show Completed', () => {
    it('should toggle show Completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var res = reducers.showCompletedReducer(true, action);
      expect(res).toEqual(false);
    });
  });


});
