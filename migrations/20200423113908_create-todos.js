
exports.up = function(knex) {
  return knex.schema.createTable('todos',(table) => {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('status');
    table.integer('user_id').unsigned().references('users.id');
    table.integer('category_id').unsigned().references('categories.id');
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos')
};


