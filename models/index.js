'use strict';

var _ = require('underscore');
var api = require('../api');

var Model = module.exports = function Model(attr) {
  this.attributes = _.pick(attr, _.identity); // strips out elements with no values
  console.log("attr are: ", attr)
  console.log("this.attributes is: ", this.attributes)
};

Model.prototype.read = function getRecords() {
  return api.read(this.toJSON());
};

Model.prototype.set = function set(id, value) {
  this.attributes[id] = value;
};

Model.prototype.get = function get(id) {
  return this.attributes[id];
};

Model.prototype.toJSON = function toJSON() {
  return this.attributes;
};
