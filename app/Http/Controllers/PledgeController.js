'use strict';

const Pledge = use('App/Model/Pledge');

class PledgeController {

  * index(request, response) {
    const pledges = yield Pledge.with('project', 'user').fetch();

    response.send(pledges);
  }

  * store(request, response) {
    const input = request.only('amount', 'project_id', 'user_id');
    const pledge = yield Pledge.create(input);

    response.send(pledge);
  }

  * show(request, response) {
    const id = request.param('id');
    const pledge = yield Pledge.with('project', 'user').where({ id }).firstOrFail();

    response.send(pledge);
  }

  * update(request, response) {
    const input = request.only('amount', 'project_id', 'user_id');
    const id = request.param('id');

    const pledge = yield Pledge.with('project', 'user').where({ id }).firstOrFail();
    pledge.fill(input);
    yield pledge.save(input);

    response.send(pledge);
  }

  * destroy(request, response) {
    const id = request.param('id');
    const pledge = yield Pledge.query().where({ id }).firstOrFail();
    yield pledge.delete();

    response.status(204).send();
  }

}

module.exports = PledgeController;
