'use strict'

const Lucid = use('Lucid')

class Pledge extends Lucid {


  project() {
    return this.belongsTo('App/Model/project', 'id', 'project_id');
  }
  user() {
    return this.belongsTo('App/Model/user', 'id', 'user_id');
  }
}

module.exports = Pledge
