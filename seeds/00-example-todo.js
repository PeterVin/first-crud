/*name: string,
description: string,
status: string,
user_id: number,
category_id: number,*/

exports.seed = function(knex) {
  knex('todos').insert( [
    {
      name: 'First todo',
      description: 'test1',
      status: 'new',
      user_id: 1,
      category_id: 1,
    },
    {
      name: 'Second todo',
      description: 'test1',
      status: 'new',
      user_id: 3,
      category_id: 2,
    },
    {
      name: 'Third todo',
      description: 'test1',
      status: 'new',
      user_id: 1,
      category_id: 3,
    },
    {
      name: 'Fourth todo',
      description: 'test1',
      status: 'new',
      user_id: 1,
      category_id: 4,
    },
    {
      name: 'Fifth todo',
      description: 'test1',
      status: 'new',
      user_id: 1,
      category_id: 5,
    },
    {
      name: 'Sixth todo',
      description: 'test1',
      status: 'new',
      user_id: 3,
      category_id: 6,
    },
    {
      name: 'Seventh todo',
      description: 'test1',
      status: 'new',
      user_id: 4,
      category_id: 7,
    },
  ]);
};