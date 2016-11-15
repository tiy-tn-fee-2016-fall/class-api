'use strict';

const Schema = use('Schema');

class ProjectSchema extends Schema {

  up() {
    this.create('projects', (table) => {
      table.increments();
      table.string('name');
      
      table.integer('goal');
      table.text('description');
      
      table.timestamps();
    });
  }

  down() {
    this.drop('projects');
  }

}

module.exports = ProjectSchema;
