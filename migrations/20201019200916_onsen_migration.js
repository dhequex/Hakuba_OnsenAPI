
exports.up = function(knex) {
    return knex.schema.createTable('contact_details', (table) =>{
        table.increments('id')
        table.string('name')
        table.string('URL')
        table.string('Tel')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('contact_details');
  };