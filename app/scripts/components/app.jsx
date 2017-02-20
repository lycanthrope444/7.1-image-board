var React = require('react');

var Form = require('./form.jsx').ImageForm;
var Listing = require('./listing.jsx').ImageList;

var App = React.createClass({
  
  render: function(){
    return (
      <div>
        {console.log(this.props.children), this.props.children}
      </div>
    );
  }
});

module.exports = {
  App : App
};
