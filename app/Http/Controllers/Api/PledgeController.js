'use strict';

const Pledge = use('App/Model/Pledge');
const attributes = ['amount'];

class PledgeController {

  * index(request, response) {
    const pledges = yield Pledge.with('project', 'user').fetch();

    response.jsonApi('Pledge', pledges);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
      project_id: request.jsonApi.getRelationId('project'),
      user_id: request.jsonApi.getRelationId('user'),
    };
    const pledge = yield Pledge.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('Pledge', pledge);
  }

  * show(request, response) {
    const id = request.param('id');
    const pledge = yield Pledge.with('project', 'user').where({ id }).firstOrFail();

    response.jsonApi('Pledge', pledge);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
      project_id: request.jsonApi.getRelationId('project'),
      user_id: request.jsonApi.getRelationId('user'),
    };

    const pledge = yield Pledge.with('project', 'user').where({ id }).firstOrFail();
    yield pledge.update(Object.assign({}, input, foreignKeys));

    response.jsonApi('Pledge', pledge);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const pledge = yield Pledge.query().where({ id }).firstOrFail();
    yield pledge.delete();

    response.status(204).send();
  }

}

module.exports = PledgeController;
