var React = require('react')

var Search = React.createClass({

  render: function () {
    return (
      <div>
        <input type="seach" className="search expanded" placeholder="Search Todo"/>
        <div>
          <input type="checkbox" id="completed"/>
          <label for="completed">Show Completed</label>
        </div>
      </div>
    );
  }
});

module.exports = Search;
