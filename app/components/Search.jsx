var React = require('react')

var Search = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.shoCompleted.checked;
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
        <div>
          <label htmlFor="completed">
            <input type="checkbox" ref="shoCompleted"/>
            Show Completed
          </label>
        </div>
      </div>
    );
  }
});

module.exports = Search;
