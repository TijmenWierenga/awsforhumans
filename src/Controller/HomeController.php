<?php
namespace AwsForHumans\Controller;

use Contentful\Delivery\Client;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

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

    public function index()
    {
        $entries = $this->client->getEntries();

        die(dump($entries));
    }
}
