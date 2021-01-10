const http = require('http');
const resumeData = require('./resumeData')

//create a server object:
http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.write(JSON.stringify(resumeData)); //write a response to the client
    res.end(); //end the response
}).listen(3001); //the server object listens on port 8080