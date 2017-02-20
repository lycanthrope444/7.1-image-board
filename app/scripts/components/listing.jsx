var React = require('react');

var ImageCollection = require('../models/image').ImageCollection;

var ImageList = React.createClass({
  getInitialState: function(){
    var images = new ImageCollection();
    images
    return images;
  },
  render: function(){

    return (
      <div>
        <img />
        <div>
          PlaceHolder
        </div>
      </div>
    )
  }
});

module.exports = {
  ImageList: ImageList
};
