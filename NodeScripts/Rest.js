
var util = require('util'),
    request = require('request'),
    hitGiphy = require('./hitGiphy.js');   

module.exports = function (app, express) {
    
    var giphyAPIURL = 'http://api.giphy.com/v1/gifs/search?q=%s&api_key=dc6zaTOxFJmzC';
    
    //Based on the 'SearchBy' phrase find the related images from Giphy.com and filter and pick the required attributes for user

        app.get("/api/giphy/:searchBy",
                    function (req, res) {
                                var srchStr = util.format(giphyAPIURL, req.params.searchBy);
                                hitGiphy.giphyCall(request, srchStr, res);
                    }
        );

    // Load the single view file (angular will handle the page changes on the front-end) for inital request

        app.get('*', function (req, res) {
            res.sendfile('./Index.html');
        });

}