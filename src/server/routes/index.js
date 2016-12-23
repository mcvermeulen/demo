module.exports = function(app) {
    var api = '/api';
    var data = '/../../data/';
    var jsonfileservice = require('./utils/jsonfileservice')();

    app.get(api + '/meeting/:id', getMeeting);
    app.get(api + '/meetings', getMeetings);

    function getMeetings(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'meetings.json');
        res.send(json);
    }

    function getMeeting(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'meetings.json');
        var meeting = json.filter(function(m) {
            return m.id === parseInt(req.params.id);
        });
        res.send(meeting[0]);
    }

};
