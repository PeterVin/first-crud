
exports.up = function(knex) {
  return knex.schema.table('users',(table) => {
    table.integer('group_id').unsigned().references('groups.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
