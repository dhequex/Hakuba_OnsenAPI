
exports.up = function(knex) {
    return knex.schema.createTable('working hours', (table) =>{
        table.increments('id')
        table.string('Open Time')
        table.string('Closing Time')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('working hours');
  };