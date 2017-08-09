var React = require('react')
var { connect } = require('react-redux');
var actions = require('Actions');


export var Search = React.createClass({
  render: function () {
    var { dispatch, showCompleted, searchText } = this.props;
    return (
      <div className="container_header">
        <div>
          <input
            type="search"
            ref="searchText"
            className="search expanded"
            placeholder="Search Todo"
            value={searchText}
            onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText))
            }}
          />
        </div>
        <div>
          <label htmlFor="completed">
            <input
              type="checkbox"
              ref="showCompleted"
              checked={this.showCompleted}
              onChange={() => {
                dispatch(actions.toggleShowCompleted())
              }}/>
            Show Completed
          </label>
        </div>
      </div>
    );
  }
});

export default connect((state) => ({
  showCompleted: state.showCompleted,
  searchText: state.searchText
}))(Search)
