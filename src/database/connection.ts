import path from 'path';
import knex from 'knex';

const connection = knex({
  client: 'pg',
  connection: {
    filename: path.resolve(__dirname, '..', '..', 'development')
  },
  useNullAsDefault: true
});

export default connection;
