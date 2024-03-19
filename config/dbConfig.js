// // dbConfig.js
// export const dbConfig = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "",
//   DB: "devloop",
//   PORT:"3306",
//   dialect: "mysql",
//   pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//   }
// };

// dbConfig.js

import dotenv from 'dotenv';
dotenv.config();

export const dbConfig = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  PORT:process.env.PORT,
  dialect: "mysql",
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
};