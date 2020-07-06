exports.up = function(knex) {
  return knex.schema.createTable('collections', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('image_url').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('collections');
};
