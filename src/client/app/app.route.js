(function() {
    'use strict';

    angular
        .module('meetingsapp')
        .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routes($stateProvider, $urlRouterProvider) {
        var states = [
            {name: '404', templateUrl: 'app/core/404.html'},
            {name: 'home', url: '/', templateUrl: 'app/core/home.html'},
            {
                name: 'meetings',
                url: '/meetings',
                controller: 'MeetingsController as m',
                templateUrl: 'app/meetings/meetings.html',
                resolve: {
                    meetings: ['MeetingsService', function (MeetingsService) {
                        return MeetingsService.getMeetings();
                    }]
                }
            },
            {
                name: 'meetings.detail',
                url: '/{meetingId}',
                controller: 'MeetingDetailsController as md',
                templateUrl: 'app/meetings/details.html',
                resolve: {
                    meeting: ['MeetingsService', '$stateParams',
                        function(MeetingsService, $stateParams) {
                            return MeetingsService.getMeeting($stateParams.meetingId);
                        }]
                }
            }
        ];

        // Loop over the state definitions and register them
        states.forEach(function(state) {
            $stateProvider.state(state);
        });

        // Set home and otherwise routes
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise(function($injector, $location) {
            $injector.invoke(['$state', function($state) {
                $state.go('404');
            }]);
        });
    }

})();
