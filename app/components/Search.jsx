var React = require('react')

var Search = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <div>
        <div>
          <input
            type="seach"
            ref="searchText"
            className="search expanded"
            placeholder="Search Todo"
            onChange={this.handleSearch}
          />
        </div>
        <div onChange={this.handleSearch}>
          <label htmlFor="completed">
            <input type="checkbox" ref="showCompleted"/>
            Show Completed
          </label>
        </div>
      </div>
    );
  }
});

module.exports = Search;
