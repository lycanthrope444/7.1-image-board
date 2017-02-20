var Backbone = require('backbone');

var ImagePost = Backbone.Model.extend({

});

var ImageCollection = Backbone.Collection.extend({
  model: ImagePost,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/nathanimage'
});

module.exports = {
  ImagePost: ImagePost,
  ImageCollection: ImageCollection
};
