var $ = require('jquery');
var React = require('react');

var Form = require('./form.jsx').ImageForm;
var Listing = require('./listing.jsx').ImageList;

var App = React.createClass({
  componentWillMount: function(){
    var imageList = this.props.collection;
    imageList.fetch();
    this.state = imageList;
    this.props.children.state = imageList;

  },
  submitPic: function(event){
    event.preventDefault();
    var $name = $('#name');
    var $picture = $('#picture');
    var newPic = {
      name : $name.val(),
      picture: $picture.val()
    };
    console.log($name.val(), $picture.val());

    return (newPic);
  },
  render: function(){
    // {this.props.children[0], console.log('rendered', this)}
    return (
      <div>
        <div className="form-group">
          <label>
            Name:
            <input type="text" name="name" id="name" className="form-control" />
          </label>
          <label>
            Picture:
            <input type="text" name="picture" id="picture" className="form-control" />
          </label>
        </div>
        <button className ="btn" onClick={this.submitPic}>Submit</button>

        {this.props.children[1]}
      </div>
    );
  }
});

module.exports = {
  App : App
};
