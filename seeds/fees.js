
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fees').del()
    .then(function () {
      // Inserts seed entries
      return knex('fees').insert([
        {id: 1, Adult: 800, Child: 400},
        {id: 2, Adult: 600, Child: 300},
        {id: 3, Adult: 600, Child: 300},
        {id: 4, Adult: 600, Child: 300},
        {id: 5, Adult: 600, Child: 300},
        {id: 6, Adult: 600, Child: 300},
        {id: 7, Adult: 650, Child: 350},
        {id: 8, Adult: 600, Child: 300},
        {id: 9, Adult: 600, Child: 500},
        {id: 10, Adult: 1000, Child: 500},
        {id: 11, Adult: 800, Child: 400},
      ]);
    });
};
