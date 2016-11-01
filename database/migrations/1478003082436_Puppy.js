'use strict';

const Schema = use('Schema');

class PuppySchema extends Schema {

  up() {
    this.create('puppies', (table) => {
      table.increments();
      table.string('collection');
      table.string('name');
      table.string('age');
      table.boolean('adopted');
      table.string('sex');
      table.string('color');
      table.text('description');
      table.string('breed');
      table.timestamps();
    });
  }

  down() {
    this.drop('puppies');
  }

}

module.exports = PuppySchema;
