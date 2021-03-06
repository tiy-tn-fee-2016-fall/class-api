'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.get('/', function * (request, response) {
  response.send({
    version: '1.0',
    uptime: process.uptime(),
  });
});

Route.resource('lunch-spots', 'LunchSpotController');
Route.resource('puppies/:collection', 'PuppyController');

Route.resource('api/punch/pledges', 'PledgeController');
Route.resource('api/punch/projects', 'ProjectController');
Route.resource('api/punch/pledge-levels', 'PledgeLevelController');

Route.resource('json-api/punch/projects', 'Api/ProjectController');
Route.resource('json-api/punch/pledges', 'Api/PledgeController');
Route.resource('json-api/punch/pledge-levels', 'Api/PledgeLevelController');

Route.post('/users', 'UserController.store');
Route.post('/api/token', 'SessionController.store');
