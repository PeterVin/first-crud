/*name: string,
description: string,
location: string,
maximalSize: number*/

exports.seed = function(knex) {
  knex('groups').insert( [
    {
      name: 'Gipsz',
      description: 'Gipsz Jakab osztálya',
      location: 'Gipszi Land',
      maximalSize: 33,
    },
    {
      name: 'Motkányok',
      description: 'Apró rágcsálók helye',
      location: 'Erdő',
      maximalSize: 500,
    },
    {
      name: 'HalasFC',
      description: 'Foci csapat',
      location: 'KKH',
      maximalSize: 20,
    },
    {
      name: 'Joo Grup',
      description: 'Joo grup szekhelye',
      location: 'Jofalva',
      maximalSize: 10,
    },
    {
      name: 'Waffel szesze',
      description: 'Waffel maker',
      location: 'Germany',
      maximalSize: 100,
    },
    {
      name: 'Robots',
      description: 'Don\'t beleive in skynet',
      location: 'Normandy',
      maximalSize: 1000,
    },
  ]);
};
