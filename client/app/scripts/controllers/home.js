angular
  .module('app')
  .controller('homeController', [
    '$rootScope',
    '$scope',
    'apiService',
    'nikeService',
    function($rootScope, $scope, api, nike) {
      api.server.then(function(response) {
        $rootScope.version = response.data.version;
      });

      $scope.client = api.client;
      $scope.server = api.server;
      
      $scope.nikeStats = nike.getStatsAdvanced().then(function(response) {
          console.log(response);
      });
      
      
      
    }
  ])
;
