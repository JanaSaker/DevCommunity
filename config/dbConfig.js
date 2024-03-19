// dbConfig.js
export const dbConfig = {
  HOST: "monorail.proxy.rlwy.net",
  USER: "root",
  PASSWORD: "iWtzmFdqeywJprUldtdEcqJWmnEzSZeq",
  DB: "railway",
  PORT:"42068",
  dialect: "mysql",
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
};