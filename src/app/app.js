require('angular');

angular.module('OkendoChallenge', [
  require('angular-aria'),
  require('angular-animate'),
  require('angular-messages'),
  require('@uirouter/angularjs').default,
  require('./review'),
  require('./core')
])

.config(require('./routes'));