<?php
require 'vendor/autoload.php';
use Mailgun\Mailgun;
error_reporting(-1);//tell me stuff

$app = new \Slim\Slim();

$app->post('/message', function(){
    //First, instantiate the SDK with your API credentials and define your domain.
    $mg = new Mailgun(getenv('MAILGUN_API_KEY'));
    $domain = getenv('MAILGUN_DOMAIN');

    $message = implode('\n', $_POST);

    //Now, compose and send your message.
    $mg->sendMessage($domain, array(
        'from'    => 'info@mimic.love',
        'to'      => 'nick@mimic.love',
        'subject' => 'A new message from mimic.love',
        'text'    => $message
    ));

    header('location: http://mimic.love');
});


$app->run();
