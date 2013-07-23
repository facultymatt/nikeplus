angular
  .module('app')
  .factory('nikeService', [
    '$http',
    function($http) {
      
      var base = 'https://api.nike.com/';
      
      var defaultParams = function() {
          return {
              access_token: '8f9a3ae4c671f329bb62f26c577c6513'
          };
      };
      
      return {
        getStatsBasic: $http.jsonp(base + 'me/sport', {params : defaultParams()}),
        getStatsAdvanced: function() {
            return $http({method: 'GET', url: base + 'me/sport', params : defaultParams(), headers: { accept : 'application/json', appid : 'nike'}}).then(function (response) {
                return response.data;
            });
        }
      };
    }
  ])
;
