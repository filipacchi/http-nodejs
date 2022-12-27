import { createServer } from 'http';

const http =  require("http");

http.createServer((req, res) => {
  res.write('Hello World!');
  res.end();
}).listen(process.env.PORT);


const io = require('socket.io')(http, {cookie: false});


io.on('connection', function (socket) {
  ///console.log('server')
  //console.log(data)
  console.log("User connected" + " "+socket.id)
});

