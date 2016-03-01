'use strict';
var validation = require('../validation');

describe('isQueryValid', function() {
  it.only('returns false for an empty query', function(){
    validation({})
  })
});