
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contact_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('contact_details').insert([
        {id: 1, name: 'Happo no Yu', URL:'http://hakuba-happo-onsen.jp/', Tel:'0261-72-5705'},
        {id: 2, name: 'Sato no Yu', URL:'http://hakuba-happo-onsen.jp/', Tel:'0261-72-6541'},
        {id: 3, name: 'Mimizuku no Yu', URL:'http://hakuba-happo-onsen.jp/', Tel:'0261-72-6542'},
        {id: 4, name: 'Obinata no Yu', URL:'http://hakuba-happo-onsen.jp/', Tel:'0261-72-3745'},
        {id: 5, name: 'Kurashita no Yu', URL:'http://www.kurashitanoyu.com/', Tel:'0261-72-7989'},
        {id: 6, name: 'Tenjin no Yu', URL:'http://www.hakuba-highland.net/hotspring/', Tel:'0261-72-3450'},
        {id: 7, name: 'Ryujin no Yu', URL:'http://www.hakubaescal.com/winter/escal/spa/', Tel:'0261-72-2101'},
        {id: 8, name: 'Iwatake no Yu', URL:'http://iwatake.jp/index.php/spa', Tel:'0261-72-8304'},
        {id: 9, name: 'Jurou no Yu', URL:'http://hakuba-happo-onsen.jp/', Tel:'0261-71-8160'},
        {id: 10, name: 'Kominka no Yu', URL:'http://sierrahakuba.jp/onsen/', Tel:'0261-72-3250'},
        {id: 11, name: 'Ryujin no Yu', URL:'http://hakuba-happo-onsen.jp/', Tel:'0261-85-2803'},
       
      ]);
    });
};
