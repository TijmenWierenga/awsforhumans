<?php
namespace AwsForHumans\Controller;

use Contentful\Delivery\Client;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

/**
 * @author Tijmen Wierenga <tijmen.wierenga@devmob.com>
 */
class HomeController extends Controller
{
    /**
     * @var Client
     */
    private $client;

    /**
     * HomeController constructor.
     * @param Client $client
     */
    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    public function index(): Response
    {
        return $this->render('base.html.twig');
    }
}
