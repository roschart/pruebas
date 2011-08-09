<?php
require_once ('../otra/amqp.inc');
$conn = new AMQPConnection('localhost', 5672, 'guest', 'guest');
$channel = $conn->channel();
$text="Hola Mundo";
if(isset($argv[1])){
 $text=$argv[1];	
}
$channel->queue_declare('hello');
$N=10000;
for($i=0;$i<$N;$i++){
	$msg = new AMQPMessage($text. $i, array(
    'content_type' => 'text/plain',
    'delivery_mode' => 2
));
	$channel->basic_publish($msg, '','hello');
}

$conn->close();

?>