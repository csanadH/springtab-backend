var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send(new Message('Available endpoints: /helloworld, /secondroute'));
});

app.get('/helloworld', function (req, res) {
  res.send(new Message('ezigen'));
});

app.get('/secondroute', function (req, res) {
  res.send(new Message('success'));
})
 
app.listen(3000)


class Message {
  constructor(message) {
    this.message = message;
  }
}