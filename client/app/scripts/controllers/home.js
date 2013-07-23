angular
  .module('app')
  .controller('homeController', [
    '$rootScope',
    '$scope',
    'apiService',
    'nikeService',
    function($rootScope, $scope, api, nike) {
      
      
      
      nike.getStats().then(function(response) {
          $scope.stats = response; 
      });     
      
    }
  ])
;
