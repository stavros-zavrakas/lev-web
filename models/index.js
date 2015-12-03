'use strict';

var _ = require('underscore');
var stubs = require('./stubs');

var Model = module.exports = function Model(attr) {
  this.attributes = _.pick(attr, _.identity);
};

Model.prototype.read = function getRecords() {
  return new Promise(function returnRecords(resolve, reject) {
    var records = _.where(stubs, this.toJSON());
    if (records) {
      resolve({
        records: records
      });
    } else {
      reject(new Error('No records available'));
    }
  }.bind(this));
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