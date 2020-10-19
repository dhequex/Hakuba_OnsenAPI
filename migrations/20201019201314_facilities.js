
exports.up = function(knex) {
    return knex.schema.createTable('facilities', (table) =>{
        table.increments('id')
        table.boolean('Indoor Onsen')
        table.boolean('Outdoor Onsen')
        table.boolean('Sauna')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('facilities');
  };