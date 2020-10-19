
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('facilities').del()
    .then(function () {
      // Inserts seed entries
      return knex('facilities').insert([
        {id: 1, Indoor: true, Outdoor:true, Sauna:false},
        {id: 2, Indoor: true, Outdoor:false, Sauna:false},
        {id: 3, Indoor: true, Outdoor:true, Sauna:false},
        {id: 4, Indoor: true, Outdoor:true, Sauna:false},
        {id: 5, Indoor: true, Outdoor:true, Sauna:false},
        {id: 6, Indoor: true, Outdoor:true, Sauna:false},
        {id: 7, Indoor: true, Outdoor:false, Sauna:false},
        {id: 8, Indoor: true, Outdoor:false, Sauna:false},
        {id: 9, Indoor: true, Outdoor:true, Sauna:false},
        {id: 10, Indoor: true, Outdoor:true, Sauna:false},
        {id: 11, Indoor: true, Outdoor:true, Sauna:false},
       
      ]);
    });
};
