(function() {
    'use strict';

    angular.module('meetingsapp')
        .controller('MeetingsController',  MeetingsController)
        .controller('MeetingDetailsController',  MeetingDetailsController);

    MeetingsController.$inject = ['meetings', '$state', '$stateParams'];
    function MeetingsController(meetings, $state, $stateParams) {
        this.meetings = meetings;
        this.userSelected = this.meetings[0];

        this.changeState = function(meeting) {
            $state.go('meetings.detail', {meetingId: meeting.id});
        };

        // Indien geen resolve gebruikt wordt in de stateProvider kan het ook op deze (organieke) manier
        // var vm = this;
        //
        // MeetingsService.getAllMeetings()
        //     .then(function(response) {
        //         vm.meetings = response;
        //     }, function(error) {
        //         console.log(error);
        //     });

    }

    MeetingDetailsController.$inject = ['meeting'];
    function MeetingDetailsController(meeting) {
        this.meeting = meeting;
    }
})();
