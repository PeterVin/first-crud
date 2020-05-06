
exports.up = (knex) => {
  return knex.schema.createTable('users',(table) => {
    table.increments();
    table.string('firstName', 35).notNullable();
    table.string('lastName', 35).notNullable();
    table.string('email', 15).notNullable();
    table.integer('age');
    table.timestamp('updatedAt').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};


exports.down = (knex) => {
  return knex.schema.dropTable('users')
};
