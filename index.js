"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});
server.listen(5000, function () {
    console.log('Server running at http://localhost:5000/');
});
