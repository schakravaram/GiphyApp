
// Hits the Giphy API server and picks the images related to search phrase and the result will be passed to "FilterGiphy.js/GetRequired()" for picking only required attributes for user

var giphyObj = require("./FilterGiphy.js");

module.exports =  {
    giphyCall: function (req, url,mainRes) {
        var result= [];
        return req(url, function (error, resp, body) {
            
            if (!error && resp.statusCode == 200) {
                result = JSON.parse(body);
                
                result = giphyObj.GetRequired(result.data);
                 
            }
            else {
                 result = '';
            }

           mainRes.send(result);

        });
    }
};




























