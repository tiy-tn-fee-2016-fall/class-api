'use strict';

const Puppy = use('App/Model/Puppy');

class PuppyController {

  * index(request, response) {
    const collection = request.param('collection');

    const puppies = yield Puppy.with().where({ collection }).fetch();

    response.send(puppies);
  }

  * store(request, response) {
    const collection = request.param('collection');
    const input = request.only(
      'name', 'age', 'adopted', 'sex', 'color', 'description', 'breed', 'image_url');
    input.collection = collection;
    const puppy = yield Puppy.create(input);

    response.send(puppy);
  }

  * show(request, response) {
    const id = request.param('id');
    const collection = request.param('collection');
    const puppy = yield Puppy.with().where({ id, collection }).firstOrFail();

    response.send(puppy);
  }

  * update(request, response) {
    const collection = request.param('collection');
    const input = request.only(
      'name', 'age', 'adopted', 'sex', 'color', 'description', 'breed', 'image_url');
    input.collection = collection;
    const id = request.param('id');

    const puppy = yield Puppy.with().where({ id, collection }).firstOrFail();
    puppy.fill(input);
    yield puppy.save(input);

    response.send(puppy);
  }

  * destroy(request, response) {
    const collection = request.param('collection');
    const id = request.param('id');
    const puppy = yield Puppy.query().where({ id, collection }).firstOrFail();
    yield puppy.delete();

    response.status(204).send();
  }

}

module.exports = PuppyController;
