'use strict';

const Schema = use('Schema');

class PledgeSchema extends Schema {

  up() {
    this.create('pledges', (table) => {
      table.increments();
      table.integer('amount');
      table.integer('project_id').references('projects.id');
      table.integer('user_id').references('users.id');
      table.timestamps();
    });
  }

  down() {
    this.drop('pledges');
  }

}

module.exports = PledgeSchema;
