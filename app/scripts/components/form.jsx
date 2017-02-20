var React = require('react');

var ImageCollection = require('../models/image').ImageCollection;

var ImageForm = React.createClass({

  render: function(){
    // submitForm: function(){
    //   return this;
    // };

    return (
      <div>
        <div className="form-group">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
        </div>
        <button className ="btn">Submit</button>
      </div>
    );
  },

});

module.exports = {
  ImageForm : ImageForm
};
