var $ = require('jquery');
var React = require('react');

var ImageCollection = require('../models/image').ImageCollection;

var ImageForm = React.createClass({
  componentWillMount: function(){
    console.log('form', this);
  },
  // submitPic: function(event){
  //   event.preventDefault();
  //   var $name = $('#name');
  //   var $picture = $('#picture');
  //   var newPic = {
  //     name : $name.val(),
  //     picture: $picture.val()
  //   };
  //   console.log($name.val(), $picture.val());
  //
  //   return (newPic);
  // },
  render: function(){
    // function submitPic(event){
    //   event.preventDefault();
    //
      // var $name = $('#name');
      // var $picture = $('#picture');
    //
    //   console.log(self);
    // }
    return (
      // <div className="form-group">
      //   <label>
      //     Name:
      //     <input type="text" name="name" id="name" className="form-control" />
      //   </label>
      //   <label>
      //     Picture:
      //     <input type="text" name="picture" id="picture" className="form-control" />
      //   </label>
      // </div>
      // <button className ="btn" onClick={this.submitPic}>Submit</button>
      <div key="input">

      </div>
    );
  },

});

module.exports = {
  ImageForm : ImageForm
};
