var request = require('request');

exports.getLiveLTV = (req, res, next) => {
    request('https://www.lrt.lt/servisai/stream_url/live/get_live_url.php?channel=LTV1', function (error, response, body) {
        if(error) {
            let error = JSON.parse(error)
            res.status(500).send(error)
        }
        let info = JSON.parse(body);
        res.status(200).send(info);
    });
};

exports.getLiveLTV2 = (req, res, next) => {
    request('https://www.lrt.lt/servisai/stream_url/live/get_live_url.php?channel=LTV2', function (error, response, body) {
        if(error) {
            let error = JSON.parse(error)
            res.status(500).send(error)
        }
        let info = JSON.parse(body);
        res.status(200).send(info);
    });
};

exports.getLiveWORLD = (req, res, next) => {
    request('https://www.lrt.lt/servisai/stream_url/live/get_live_url.php?channel=WORLD', function (error, response, body) {
        if(error) {
            let error = JSON.parse(error)
            res.status(500).send(error)
        }
        let info = JSON.parse(body);
        res.status(200).send(info);
    });
};

exports.getLiveLR = (req, res, next) => {
    request('https://www.lrt.lt/servisai/stream_url/live/get_live_url.php?channel=LR', function (error, response, body) {
        if(error) {
            let error = JSON.parse(error)
            res.status(500).send(error)
        }
        let info = JSON.parse(body);
        res.status(200).send(info);
    });
};

exports.getLiveKlasika = (req, res, next) => {
    request('https://www.lrt.lt/servisai/stream_url/live/get_live_url.php?channel=Klasika', function (error, response, body) {
        if(error) {
            let error = JSON.parse(error)
            res.status(500).send(error)
        }
        let info = JSON.parse(body);
        res.status(200).send(info);
    });
};

exports.getLiveOpus = (req, res, next) => {
    request('https://www.lrt.lt/servisai/stream_url/live/get_live_url.php?channel=Opus', function (error, response, body) {
        if(error) {
            let error = JSON.parse(error)
            res.status(500).send(error)
        }
        let info = JSON.parse(body);
        res.status(200).send(info);
    });
};

