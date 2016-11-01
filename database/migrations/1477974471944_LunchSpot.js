'use strict';

const Schema = use('Schema');

class LunchSpotSchema extends Schema {

  up() {
    this.create('lunch_spots', (table) => {
      table.increments();
      table.string('name');
      table.string('street');
      table.string('city');
      table.string('zip');
      table.integer('votes');
      table.timestamps();
    });
  }

  down() {
    this.drop('lunch_spots');
  }

}

module.exports = LunchSpotSchema;
