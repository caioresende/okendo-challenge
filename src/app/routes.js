module.exports = function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
  
    $urlMatcherFactoryProvider.strictMode(false);
  
    $urlRouterProvider
      .when('/', '');
  
    $stateProvider
      .state('main', {
        url: '',
        template: require('./review/review.html'),
        controller: 'ReviewController as review'
      })
  };