var events = require('events');

var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received',function() {
	console.log('data recieved succesfully.');
});

eventEmitter.emit('connection');

console.log("program ended.");

