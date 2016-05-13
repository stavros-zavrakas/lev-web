'use strict';

// Used for test where only one record should be returned
module.exports = {
  'administrativeArea': 'Reading',
  'subDistrict': 'Test Subdistrict',
  'registrationDistrict': 'Test District',
  'child': {
    'originalName': {
      'givenName': 'Tester',
      'surname': 'Solo',
      'fullName': 'Tester Solo'
    },
    'name': {
      'givenName': 'Brandon',
      'surname': 'Solo',
      'fullName': 'Brandon Solo'
    },
    'dateOfBirth': '29/02/2000',
    'sex': 'Male',
    'birthplace': 'Test Address'
  },
  'father': {
    'name': {
      'givenName': 'Dad',
      'surname': 'Solo',
      'fullName': 'Dad Solo'
    },
    'birthplace': 'Test Birthplace'
  },
  'mother': {
    'name': {
      'givenName': 'Mum',
      'surname': 'Solo',
      'fullName': 'Mum Solo'
    },
    'birthplace': 'Test Birthplace',
    'maidenSurname': 'prev-Solo'
  },
  'systemNumber': 999999910,
  'date': '10/10/2014'
};