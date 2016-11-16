const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Project extends JsonApiView {
  get attributes() {
    return ['name', 'goal', 'description'];
  }

  pledge() {
    return this.hasMany('App/Http/JsonApiViews/Pledge', {
      included: true,
      excludeRelation: 'project'
    });
  }

  pledgeLevels() {
    return this.hasMany('App/Http/JsonApiViews/PledgeLevel', {
      included: true,
      excludeRelation: 'project'
    });
  }

}

module.exports = Project;
