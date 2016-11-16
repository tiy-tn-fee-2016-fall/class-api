'use strict';

const Project = use('App/Model/Project');
const attributes = ['name', 'goal', 'description'];

class ProjectController {

  * index(request, response) {
    const projects = yield Project.with('pledge', 'pledgeLevels').fetch();

    response.jsonApi('Project', projects);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };
    const project = yield Project.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('Project', project);
  }

  * show(request, response) {
    const id = request.param('id');
    const project = yield Project.with('pledge', 'pledgeLevels').where({ id }).firstOrFail();

    response.jsonApi('Project', project);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };

    const project = yield Project.with('pledge', 'pledgeLevels').where({ id }).firstOrFail();
    yield project.update(Object.assign({}, input, foreignKeys));

    response.jsonApi('Project', project);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const project = yield Project.query().where({ id }).firstOrFail();
    yield project.delete();

    response.status(204).send();
  }

}

module.exports = ProjectController;
