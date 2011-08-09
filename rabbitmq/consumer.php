<?php
require_once ('./php-amqplib/amqp.inc');
$consumer = function ($msg) {
	print_r($msg);
};
$conn = new AMQPConnection('localhost', 5672, 'guest', 'guest');
$channel = $conn->channel();
$channel->exchange_declare('upload-pictures', 'fanout', false, true, false);
$channel->queue_declare('resize-picture', false, true, false, false);
$channel->queue_bind('resize-picture', 'upload-pictures');
$channel->basic_consume('resize-picture', 'consumer_taag', false, false, false, false, $consumer);
while (count($channel->callbacks)) {
    $channel->wait();
}
?>