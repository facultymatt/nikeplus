angular
    .module('app')
    .factory('nikeService', [
        '$http',
        function($http) {

            var base = 'https://api.nike.com/';

            var defaultParams = function() {
                return {
                    access_token: 'fa9435db977400af8b7cc364ab803f73',
                    format: 'json'
                };
            };

            return {
                getStatsAdvanced: function() {
                    return $http({
                        method: 'GET',
                        url: base + 'me/sport',
                        params: defaultParams(),
                        headers: {
                            accept: 'application/json',
                            appid: 'nike'
                        }
                    }).then(function(response) {
                        return response.data;
                    });
                },
                getStats: function() {
                    return $http.get('/api/nike/basic').then(function(response) {
                        return response.data;
                    });
                }
            };
        }
    ]);
