/*  name: string,
  status: "important" | "freetime" | "family",*/

  exports.seed = function(knex) {
    knex('categories').insert( [
      {
        name: 'First category',
        status: 'important',
      },
      {
        name: 'Second category',
        status: 'freetime',
      },
      {
        name: 'Third category',
        status: 'family',
      },
      {
        name: 'Fourth category',
        status: 'important',
      },
      {
        name: 'Fifth category',
        status: 'freetime',
      },
      {
        name: 'Sixth category',
        status: 'important',
      },
      {
        name: 'Seventh category',
        status: 'family',
      },
    ]);
  };
  