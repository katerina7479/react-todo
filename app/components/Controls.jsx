var React = require('react')

var Controls = React.createClass({

  render: function () {
    return (
      <div>
        <h1>Controls</h1>
        <input type="text" placeholder="Add Todo" />
        <button type="submit" className="button expanded">Submit</button>
      </div>
    );
  }
});

module.exports = Controls;
