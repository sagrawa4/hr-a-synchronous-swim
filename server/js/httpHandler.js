const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const keypressHandler = require('./keypressHandler');
const messageQueue = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

//const validMessages = ['left', 'right', 'up', 'down'];

/*let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};
console.log("queue" , messageQueue);*/


module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  //const generator = () => Math.floor(Math.random() * 4);

  res.writeHead(200, headers);

  if(req.method === 'POST') {

  }else if(req.method === 'GET') {
    var data = messageQueue.dequeue();
    if(data) {
      res.write(data);
    }
    res.end();
    next();
  }

   // invoke next() at the end of a request to help with testing!
};
