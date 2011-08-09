var sys = require('sys');
var amqp = require('amqp');

var connection = amqp.createConnection({
    host: 'localhost'
});

// Wait for connection to become established.
connection.on('ready', function() {
    // Create a queue and bind to all messages.
    // Use the default 'amq.topic' exchange
    var q = connection.queue('hello');
    // Catch all messages
    q.bind('#');

    // Receive messages
    q.subscribe(function(message) {
        // Print messages to stdout
        sys.p(message.data.toString());
    });
});
