'use strict';

const LunchSpot = use('App/Model/LunchSpot');

class LunchSpotController {

  * index(request, response) {
    const lunchSpots = yield LunchSpot.with().fetch();

    response.send(lunchSpots);
  }

  * store(request, response) {
    const input = request.only('name', 'street', 'city', 'zip', 'votes');
    const lunchSpot = yield LunchSpot.create(input);

    response.send(lunchSpot);
  }

  * show(request, response) {
    const id = request.param('id');
    const lunchSpot = yield LunchSpot.with().where({ id }).firstOrFail();

    response.send(lunchSpot);
  }

  * update(request, response) {
    const input = request.only('name', 'street', 'city', 'zip', 'votes');
    const id = request.param('id');

    const lunchSpot = yield LunchSpot.with().where({ id }).firstOrFail();
    lunchSpot.fill(input);
    yield lunchSpot.save(input);

    response.send(lunchSpot);
  }

  * destroy(request, response) {
    const id = request.param('id');
    const lunchSpot = yield LunchSpot.query().where({ id }).firstOrFail();
    yield lunchSpot.delete();

    response.status(204).send();
  }

}

module.exports = LunchSpotController;
