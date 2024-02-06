const { Pool } = require('pg');
const pool = new Pool({
  user: 'wise_energy_local',
  host: 'localhost',
  database: 'wise_energy_local',
  password: 'local_dev',
  port: 5438,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log(result.rows);
  });
});
