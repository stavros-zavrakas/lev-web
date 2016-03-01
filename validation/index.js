var _ = require('underscore');

var isQueryValid = function isQueryValid(query) {
  return _.isEmpty(query)
};

module.exports = isQueryValid;

//module.exports = {
//  isQueryValid: function isQueryValid(query) {
//    return !_.isEmpty(query)
//  }
//};