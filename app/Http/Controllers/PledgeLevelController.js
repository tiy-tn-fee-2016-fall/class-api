'use strict';

const PledgeLevel = use('App/Model/PledgeLevel');

class PledgeLevelController {

  * index(request, response) {
    const pledgeLevels = yield PledgeLevel.with('project').fetch();

    response.send(pledgeLevels);
  }

  * store(request, response) {
    const input = request.only('name', 'price', 'description', 'project_id');
    const pledgeLevel = yield PledgeLevel.create(input);

    response.send(pledgeLevel);
  }

  * show(request, response) {
    const id = request.param('id');
    const pledgeLevel = yield PledgeLevel.with('project').where({ id }).firstOrFail();

    response.send(pledgeLevel);
  }

  * update(request, response) {
    const input = request.only('name', 'price', 'description', 'project_id');
    const id = request.param('id');

    const pledgeLevel = yield PledgeLevel.with('project').where({ id }).firstOrFail();
    pledgeLevel.fill(input);
    yield pledgeLevel.save(input);

    response.send(pledgeLevel);
  }

  * destroy(request, response) {
    const id = request.param('id');
    const pledgeLevel = yield PledgeLevel.query().where({ id }).firstOrFail();
    yield pledgeLevel.delete();

    response.status(204).send();
  }

}

module.exports = PledgeLevelController;
