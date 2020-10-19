
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('BusinessHours').del()
    .then(function () {
      // Inserts seed entries
      return knex('BusinessHours').insert([
        {id: 1, Open: '9:00:00 AM', Closing: '10:00:00 PM'},
        {id: 2, Open: '12:00:00 PM', Closing: '9:00:00 PM'},
        {id: 3, Open: '10:00:00 AM', Closing: '9:30:00 PM'},
        {id: 4, Open: '9:00:00 AM', Closing: '6:00:00 PM'},
        {id: 5, Open: '10:00:00 AM', Closing: '10:00:00 PM'},
        {id: 6, Open: '11:00:00 AM', Closing: '8:00:00 PM'},
        {id: 7, Open: '10:00:00 AM', Closing: '4:30:00 PM'},
        {id: 8, Open: '1:00:00 PM', Closing: '6:00:00 PM'},
        {id: 9, Open: '10:00:00 AM', Closing: '10:00:00 PM'},
        {id: 10, Open: '10:30:00 AM', Closing: '3:30:00 PM'},
        {id: 11, Open: '11:00:00 AM', Closing: '10:00:00 PM'},
      ]);
    });
};
