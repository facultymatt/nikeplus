angular
  .module('app', [])
  .config(['$routeProvider', '$httpProvider', function($router, $httpProvider) {
    
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    $httpProvider.defaults.headers.common.accept = 'application/json;';
    $httpProvider.defaults.headers.common.appid = 'nike';
    
    $router
      .when('/', {
        controller:   'homeController',
        templateUrl:  'app/templates/home.html'
      })
    ;
  }])
;
