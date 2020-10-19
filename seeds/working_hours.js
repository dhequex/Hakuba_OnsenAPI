
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('working_hours').del()
    .then(function () {
      // Inserts seed entries
      return knex('working_hours').insert([
        {id: 1, Open_Time: '9:00:00 AM', Closing_Time: '10:00:00 PM'},
        {id: 2, Open_Time: '12:00:00 PM', Closing_Time: '9:00:00 PM'},
        {id: 3, Open_Time: '10:00:00 AM', Closing_Time: '9:30:00 PM'},
        {id: 4, Open_Time: '9:00:00 AM', Closing_Time: '6:00:00 PM'},
        {id: 5, Open_Time: '10:00:00 AM', Closing_Time: '10:00:00 PM'},
        {id: 6, Open_Time: '11:00:00 AM', Closing_Time: '8:00:00 PM'},
        {id: 7, Open_Time: '10:00:00 AM', Closing_Time: '4:30:00 PM'},
        {id: 8, Open_Time: '1:00:00 PM', Closing_Time: '6:00:00 PM'},
        {id: 9, Open_Time: '10:00:00 AM', Closing_Time: '10:00:00 PM'},
        {id: 10, Open_Time: '10:30:00 AM', Closing_Time: '3:30:00 PM'},
        {id: 11, Open_Time: '11:00:00 AM', Closing_Time: '10:00:00 PM'},
      ]);
    });
};
