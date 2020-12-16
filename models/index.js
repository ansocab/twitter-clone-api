require("dotenv").config();
const pg = require("pg");

const pool = new pg.Pool({
  user: "ymdyxkfv",
  host: "suleiman.db.elephantsql.com",
  database: "ymdyxkfv",
  password: process.env.DB_PW,
  port: 5432,
});

module.exports = pool;
