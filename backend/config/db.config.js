require('dotenv').config();

module.exports = {
  HOST: process.env.PGHOST,          
  USER: process.env.PGUSER,          
  PASSWORD: process.env.PGPASSWORD,  
  DB: process.env.PGDATABASE,        
  PORT: process.env.PGPORT,          
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