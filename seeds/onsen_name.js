
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('name').del()
    .then(function () {
      // Inserts seed entries
      return knex('name').insert([
        {id: 1, name: 'Happo no Yu'},
        {id: 2, name: 'Sato no Yu'},
        {id: 3, name: 'Mimizuku no Yu'},
        {id: 4, name: 'Obinata no Yu'},
        {id: 5, name: 'Kurashita no Yu'},
        {id: 6, name: 'Tenjin no Yu'},
        {id: 7, name: 'Ryujin no Yu'},
        {id: 8, name: 'Iwatake no Yu'},
        {id: 9, name: 'Jurou no Yu'},
        {id: 10, name: 'Kominka no Yu'},
        {id: 11, name: 'Ryujin no Yu'},
      ]);
    });
};
