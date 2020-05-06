exports.seed = function(knex) {
  knex('Users').insert( [
    {
      firstName: 'Jakab',
      lastName: 'Gipsz',
      email: 'jakab@gipsz.hu',
      age: 33,
      groupId: 1,
      role: 'admin',
      password: 'abc123'
    },
    {
      firstName: 'Peter',
      lastName: 'Vincze',
      email: 'pbab@gipsz.hu',
      age: 28,
      groupId: 2,
      role: 'admin',
      password: 'asd123'
    }
  ]);
};
