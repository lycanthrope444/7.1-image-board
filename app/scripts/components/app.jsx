var $ = require('jquery');
var React = require('react');
var _ = require('underscore');
var Backbone = require('backbone');

var Form = require('./form.jsx').ImageForm;
var Listing = require('./listing.jsx').ImageList;

var App = React.createClass({
  componentWillMount: function(){
    var imageList = this.props.collection;
    imageList.fetch();
    this.state = imageList;
    // this.props.children.state = imageList;
    // console.log(imageList);
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

    this.state.create(newPic);
  },
  showHide: function(event){
    event.preventDefault();
    $('.form-group').slideToggle();
  },
  render: function(){
    // {this.props.children[0], console.log('rendered', this)}
    // {this.props.children[1]}
    var imageList = this.props.collection;
    imageList.fetch();
    // console.log(this.state);
    return (
      <div>
        <form>
          <div className="form-group">
            <label>
              Name:
              <input type="text" name="name" id="name" className="form-control" />
            </label>
            <label>
              Picture:
              <input type="text" name="picture" id="picture" className="form-control" />
            </label>
            <button className ="btn" onClick={this.submitPic}>Submit Pic</button>
          </div>
          <button className ="btn" onClick={this.showHide}>Add Pic</button>
        </form>
        <ul>
          <ImageList data={imageList}/>
        </ul>
      </div>
    );
  }
});


var ImageList = React.createClass({
  componentWillMount: function(){
    // this.name = 'placeholder';
    // this.picture = 0;
    // var passedData = this.props.data.map(function(data){
    //   return (
    //     <li>{data}</li>
    //   )
    // });
    // console.log(passedData);
  },
  render: function(){
    // this.props.data.map(function(data){
      return (
        <li>
          <img src={this.picture}/>
          <div>
            {this.name}
          </div>
          <button className="btn">Edit Pic</button>
          <button className="btn">Delete Pic</button>
        </li>
      )
    // });

  }
});


module.exports = {
  App : App
};
