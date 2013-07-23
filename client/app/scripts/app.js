angular
  .module('app', ['ngResource'])
  .config(['$routeProvider', function($router) {
    
    $router
      .when('/', {
        controller:   'homeController',
        templateUrl:  'app/templates/home.html'
      })
    ;
  }])

.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    $httpProvider.defaults.headers.common.Accept = 'application/json';
    $httpProvider.defaults.headers.common.appid = 'nikeapp';
    
    
}]);
