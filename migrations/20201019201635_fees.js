
exports.up = function(knex) {
    return knex.schema.createTable('fees', (table) =>{
        table.increments('id')
        table.integer('Adult')
        table.integer('Child')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('fees');
  };