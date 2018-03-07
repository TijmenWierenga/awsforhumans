<?php
namespace AwsForHumans\Controller;

use Contentful\Delivery\Client;
use Contentful\Delivery\Query;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

/**
 * @author Tijmen Wierenga <tijmen.wierenga@devmob.com>
 */
class LessonController extends Controller
{
    /**
     * @var Client
     */
    private $client;

    /**
     * LessonController constructor.
     * @param Client $client
     */
    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    public function index(string $slug): Response
    {
        return $this->render('article.html.twig');
    }
}
