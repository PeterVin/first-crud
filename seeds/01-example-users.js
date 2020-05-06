exports.seed = function(knex) {
  knex('users').insert( [
    {
      firstName: 'Jakab',
      lastName: 'Gipsz',
      email: 'jakab@gipsz.hu',
      age: 33,
      groupId: 1,
      role: 'user',
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
    },
    {
      firstName: 'Mate',
      lastName: 'Teszt',
      email: 'mate@gipsz.hu',
      age: 33,
      groupId: 4,
      role: 'user',
      password: 'abc123teszt'
    },
    {
      firstName: 'Joo',
      lastName: 'Cakát',
      email: 'asdasd@gipsz.hu',
      age: 28,
      groupId: 3,
      role: 'user',
      password: 'asd123asdasd'
    },
    {
      firstName: 'Nay',
      lastName: 'Zumov',
      email: 'juzod@gipsz.hu',
      age: 33,
      groupId: 5,
      role: 'user',
      password: 'abc123sad'
    },
    {
      firstName: 'Csaba',
      lastName: 'Pitvaros',
      email: 'csaba@gipsz.hu',
      age: 28,
      groupId: 2,
      role: 'user',
      password: 'jelszo'
    },
  ]);
};
