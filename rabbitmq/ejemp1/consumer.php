<?php
require_once ('../otra/amqp.inc');
$conn = new AMQPConnection('localhost', 5672, 'guest', 'guest');
$channel = $conn->channel();
$channel->queue_declare('hello');


$consumer = function ($msg) {
	print_r($msg->body);
	print_r("\n");
};
$channel->basic_consume('hello', '', false, true, false, false, $consumer);
while (count($channel->callbacks)) {
    $channel->wait();
}
?>