'use strict';

const Schema = use('Schema');

class AddImageToPuppiesTableSchema extends Schema {

  up() {
    this.table('puppies', (table) => {
      table.string('image_url');
    });
  }

  down() {
    this.table('puppies', (table) => {
      table.dropColumn('image_url');
    });
  }

}

module.exports = AddImageToPuppiesTableSchema;
