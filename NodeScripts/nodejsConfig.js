﻿

var opener = require('opener');

module.exports = function (app) {
    
    var port = '8888',
        host = 'localhost'
        server = require('http').createServer(app);
    
    server.listen("8888");
    
    return {
                'open' : function () {
                            opener('http://' + host + ':' + port);
                         },
                'port' : port
           };
}

 

//,
//    io = require('socket.io')(server);

//io.on('connection', function (client) {
//    console.log('Client connected...');

//    client.on('join', function (data) {
//        console.log(data);
//    });
//});