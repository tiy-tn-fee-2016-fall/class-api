const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class PledgeLevel extends JsonApiView {
  get attributes() {
    return ['name', 'price', 'description'];
  }

  project() {
    return this.belongsTo('App/Http/JsonApiViews/Project', {
      included: true,
      excludeRelation: 'pledgeLevels'
    });
  }

}

module.exports = PledgeLevel;
