var moduleName = 'OkendoChallenge.Core';

angular
  .module(moduleName, [])
  .controller('NavController', require('./NavController'))
  .controller('MainController', require('./MainController'))
  .service('ReviewService', require('./ReviewService'));

  module.exports = moduleName;