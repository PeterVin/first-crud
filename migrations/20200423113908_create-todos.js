
exports.up = function(knex) {
  return knex.schema.createTable('todos',(table) => {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('status');
    table.integer('userId').unsigned().references('users.id');
    table.integer('categoryId').unsigned().references('categories.id');
    table.timestamp('updatedAt').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos')
};


