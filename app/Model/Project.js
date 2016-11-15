'use strict'

const Lucid = use('Lucid')

class Project extends Lucid {


  pledge() {
    return this.hasMany('App/Model/Pledge', 'id', 'project_id');
  }
  pledgeLevels() {
    return this.hasMany('App/Model/PledgeLevel', 'id', 'project_id');
  }
}

module.exports = Project
