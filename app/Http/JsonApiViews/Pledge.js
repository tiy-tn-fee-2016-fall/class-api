const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Pledge extends JsonApiView {
  get attributes() {
    return ['amount'];
  }

  project() {
    return this.belongsTo('App/Http/JsonApiViews/project', {
      included: true,
      excludeRelation: 'pledges'
    });
  }

  user() {
    return this.belongsTo('App/Http/JsonApiViews/user', {
      included: true,
      excludeRelation: 'pledges'
    });
  }

}

module.exports = Pledge;
