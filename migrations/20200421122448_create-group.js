
exports.up = function(knex) {
  return knex.schema.createTable('groups',(table) => {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('location');
    table.integer('maximalSize');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('groups')
};
