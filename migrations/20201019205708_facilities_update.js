
exports.up = function(knex) {
    return knex.schema.createTable('facilities', (table) =>{
        table.increments('id')
        table.boolean('Indoor')
        table.boolean('Outdoor')
        table.boolean('Sauna')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('facilities');
  };