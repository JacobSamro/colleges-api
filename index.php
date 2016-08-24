<?php

require 'vendor/autoload.php';


$app = new \Slim\Slim();

echo "Test";


$app->get('/', function () {

    echo "Hello, ";

});