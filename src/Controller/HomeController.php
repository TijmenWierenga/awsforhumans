<?php
namespace AwsForHumans\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

/**
 * @author Tijmen Wierenga <t.wierenga@live.nl>
 */
class HomeController extends Controller
{
    public function index(): Response
    {
        return $this->render('landing.html.twig');
    }
}
