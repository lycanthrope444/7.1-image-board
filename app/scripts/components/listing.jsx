var React = require('react');

var ImageCollection = require('../models/image').ImageCollection;

var ImageList = React.createClass({
  getInitialState: function(){
    var images = new ImageCollection();
    return images;
  },
  render: function(){

    return (
      <div key={this.id}>
        <img />
        <div>

        </div>
      </div>
    )
  }
});

module.exports = {
  ImageList: ImageList
};
