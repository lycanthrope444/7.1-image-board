var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/app.jsx').App;
var Form = require('./components/form.jsx').ImageForm;
var Listing = require('./components/listing.jsx').ImageList;
var ImageCollection = require('./models/image').ImageCollection;

var imageList = new ImageCollection();

ReactDOM.render(
  React.createElement(App, {
    // children: [React.createElement(Form), React.createElement(Listing)],
    collection: imageList
  }),
  document.getElementById('root')
);
