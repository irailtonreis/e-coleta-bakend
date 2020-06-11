import path from 'path';

module.exports = {
  development: {
    client: 'pg',
    version: '19.03',
  connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'docker',
      database : 'e-coleta'
    },
  migrations: {
   directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
   },
  useNullAsDefault: true,
},
}
