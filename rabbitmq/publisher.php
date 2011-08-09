<?php
require_once ('./php-amqplib/amqp.inc');
$conn = new AMQPConnection('localhost', 5672, 'guest', 'guest');
$channel = $conn->channel();
$channel->exchange_declare('upload-pictures', 'fanout', false, true, false);
$msg = new AMQPMessage('Toni es guay', array(
    'content_type' => 'text/plain',
    'delivery_mode' => 2
));
$channel->basic_publish($msg, 'upload-pictures');

?>