'use strict';

var Model = require('../models');
var isQueryValid = require('../validation');

module.exports = {

  show: function show(req, res) {
    res.render('pages/search', {values: req.query});
  },

  query: function query(req, res, next) {
    var model = new Model(req.body);
    console.log('#######################################');
    console.log('#######################################');
    console.log('#######################################');
    console.log('#######################################');
    console.log('#######################################');
    console.log('#######################################');
    console.log(model.attributes);

    if (!isQueryValid(model.attributes)) {
      return res.redirect('http://www.google.com')
    } else {
      return model
        .read()
        .then(function resolved(result) {
          var records = result.records;
          model.set('records', records);
          model.set('query', req.body);

          req.session.model = model;

          if (records.length === 1) {
            res.redirect('/details');
          } else {
            res.redirect('/results');
          }
        }, function rejected(err) {
          if (err.name === 'NotFoundError') {
            model.set('records', null);
            model.set('query', req.body);
            req.session.model = model;

            return res.redirect('/results');
          }

          next((err instanceof(Error)) ? err : new Error(err), req, res, next);
        });
    }

  }
};
