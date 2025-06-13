<?php
namespace App\Core;

class Router
{
    protected $routes = [];

    public function add(string $path, callable $handler): void
    {
        $this->routes[$path] = $handler;
    }

    public function dispatch(string $path)
    {
        if (isset($this->routes[$path])) {
            return ($this->routes[$path])();
        }
        http_response_code(404);
        echo '404 Not Found';
    }
}
