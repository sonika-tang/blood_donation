require('dotenv').config();

module.exports = {
  HOST: process.env.PGHOST || 'localhost',
  USER: process.env.PGUSER || 'postgres',
  PASSWORD: process.env.PGPASSWORD || 'postgres',
  DB: process.env.PGDATABASE || 'blood_donation',
  PORT: process.env.PGPORT || 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production' ? {
      require: true,
      rejectUnauthorized: false
    } : false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};