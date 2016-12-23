(function() {
    'use strict';

    angular.module('meetingsapp')
        .service('MeetingsService',  MeetingsService);

    MeetingsService.$inject = ['$http'];
    function MeetingsService($http) {
        var service = {
            getMeetings: getMeetings,
            getMeeting: getMeeting
        };

        return service;

        function getMeetings() {
            return $http.get('/api/meetings')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        function getMeeting(id) {
            return $http.get('/api/meeting/' + id)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
})();
