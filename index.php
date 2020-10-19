<?php
require_once(__DIR__ . '/../vendor/autoload.php');

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$app = AppFactory::create();


//$app->post('/apply', function (Request $request, Response $response, $args) {
//
//    $form = (array)$request->getParsedBody();
//
//    $content = "Applicant Full Name: " . $form['firstNames'] . $form["lastName"] . "\r\n";
//
//    mail("applications@mykn.co.za", "Application Form", $content, "From: webmaster@mykn.co.za" . "\r\n");
//
//    $loader = new FilesystemLoader(__DIR__ . '/./templates');
//    $environment = new Environment($loader);
//    $template = $environment->load('apply.html');
//    $response->getBody()->write($template->render());
//    return $response;
//});




$app->get('/apply', function (Request $request, Response $response, $args) {
    $loader = new FilesystemLoader(__DIR__ . '/../templates');
    $environment = new Environment($loader);
    $template = $environment->load('apply.html');
    $response->getBody()->write($template->render());
    return $response;
});


$app->get('/', function (Request $request, Response $response, $args) {
    $loader = new FilesystemLoader(__DIR__ . '/../templates');
    $environment = new Environment($loader);
    $template = $environment->load('index.html');
    $response->getBody()->write($template->render());
    return $response;
});

$app->run();