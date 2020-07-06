exports.up = function(knex) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary();
    table.string('category').notNullable();
    table.string('image_url').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('books');
};
