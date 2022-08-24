var express = require('express');
var app = express();

const server = require('http').createServer(app)
server.listen(process.env.PORT || 3001, ()=> {
    console.log("server running...")
  })

app.get('/',function(req, res){
    res.sendFile('home.html',{root:__dirname})
});

const io = require('socket.io')(server);
io.on('connection', client => {
    console.log("api connected..")
    });
