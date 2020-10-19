
exports.up = function(knex) {
    return knex.schema.createTable('BusinessHours', (table) =>{
        table.increments('id')
        table.string('Open')
        table.string('Closing')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('working hours');
  };