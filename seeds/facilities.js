
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('facilities').del()
    .then(function () {
      // Inserts seed entries
      return knex('facilities').insert([
        {id: 1, Indoor_Onsen: true, Outdoor_Onsen:true, Sauna:false},
        {id: 2, Indoor_Onsen: true, Outdoor_Onsen:false, Sauna:false},
        {id: 3, Indoor_Onsen: true, Outdoor_Onsen:true, Sauna:false},
        {id: 4, Indoor_Onsen: true, Outdoor_Onsen:true, Sauna:false},
        {id: 5, Indoor_Onsen: true, Outdoor_Onsen:true, Sauna:false},
        {id: 6, Indoor_Onsen: true, Outdoor_Onsen:true, Sauna:false},
        {id: 7, Indoor_Onsen: true, Outdoor_Onsen:false, Sauna:false},
        {id: 8, Indoor_Onsen: true, Outdoor_Onsen:false, Sauna:false},
        {id: 9, Indoor_Onsen: true, Outdoor_Onsen:true, Sauna:false},
        {id: 10, Indoor_Onsen: true, Outdoor_Onsen:true, Sauna:false},
        {id: 11, Indoor_Onsen: true, Outdoor_Onsen:true, Sauna:false},
       
      ]);
    });
};
