'use strict';

const PledgeLevel = use('App/Model/PledgeLevel');
const attributes = ['name', 'price', 'description'];

class PledgeLevelController {

  * index(request, response) {
    const pledgeLevels = yield PledgeLevel.with('project').fetch();

    response.jsonApi('PledgeLevel', pledgeLevels);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
      project_id: request.jsonApi.getRelationId('project'),
    };
    const pledgeLevel = yield PledgeLevel.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('PledgeLevel', pledgeLevel);
  }

  * show(request, response) {
    const id = request.param('id');
    const pledgeLevel = yield PledgeLevel.with('project').where({ id }).firstOrFail();

    response.jsonApi('PledgeLevel', pledgeLevel);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
      project_id: request.jsonApi.getRelationId('project'),
    };

    const pledgeLevel = yield PledgeLevel.with('project').where({ id }).firstOrFail();
    yield pledgeLevel.update(Object.assign({}, input, foreignKeys));

    response.jsonApi('PledgeLevel', pledgeLevel);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const pledgeLevel = yield PledgeLevel.query().where({ id }).firstOrFail();
    yield pledgeLevel.delete();

    response.status(204).send();
  }

}

module.exports = PledgeLevelController;
