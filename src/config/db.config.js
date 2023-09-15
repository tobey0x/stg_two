require("dotenv").config()


module.exports = {
  USER: process.env.USER,
  HOST: process.env.HOST,
  DB: process.env.DATABASE,
  PASSWORD: process.env.PASSWORD,
  dialect: "postgres",
  port: 5432,
};