'use strict';

const Project = use('App/Model/Project');

class ProjectController {

  * index(request, response) {
    const projects = yield Project.with('pledge', 'pledgeLevels').fetch();

    response.send(projects);
  }

  * store(request, response) {
    const input = request.only('name', 'project_id', 'goal', 'description', 'project_id');
    const project = yield Project.create(input);

    response.send(project);
  }

  * show(request, response) {
    const id = request.param('id');
    const project = yield Project.with('pledge', 'pledgeLevels').where({ id }).firstOrFail();

    response.send(project);
  }

  * update(request, response) {
    const input = request.only('name', 'project_id', 'goal', 'description', 'project_id');
    const id = request.param('id');

    const project = yield Project.with('pledge', 'pledgeLevels').where({ id }).firstOrFail();
    project.fill(input);
    yield project.save(input);

    response.send(project);
  }

  * destroy(request, response) {
    const id = request.param('id');
    const project = yield Project.query().where({ id }).firstOrFail();
    yield project.delete();

    response.status(204).send();
  }

}

module.exports = ProjectController;
