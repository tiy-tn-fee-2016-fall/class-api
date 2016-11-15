'use strict';

const Schema = use('Schema');

class PledgeLevelSchema extends Schema {

  up() {
    this.create('pledge_levels', (table) => {
      table.increments();
      table.string('name');
      table.integer('price');
      table.text('description');
      table.integer('project_id').references('projects.id');
      table.timestamps();
    });
  }

  down() {
    this.drop('pledge_levels');
  }

}

module.exports = PledgeLevelSchema;
