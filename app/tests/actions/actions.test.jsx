var expect = require('expect');
var actions = require('Actions');


describe('Actions', () => {
  it('should generate searchText action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Thing I want to do'
    }
    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });

  it('should generate toggleTodo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 3
    }
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });

  it('should generate toggle completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    }
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });
  
});
