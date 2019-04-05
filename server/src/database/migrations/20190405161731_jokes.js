exports.up = knex =>
  knex.schema.createTable('jokes', users => {
    users.increments();

    users
      .string('joke')
      .notNullable()
      .unique();
  });

exports.down = knex => knex.schema.dropTableIfExists('jokes');
