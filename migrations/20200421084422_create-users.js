
exports.up = (knex) => {
  return knex.schema.createTable('users',(table) => {
    table.increments();
    table.string('firstName', 35).notNullable();
    table.string('lastName', 35).notNullable();
    table.string('email', 15).notNullable();
    table.integer('age');
    table.timestamps();
  });
};


exports.down = (knex) => {
  return knex.schema.dropTable('users')
};
