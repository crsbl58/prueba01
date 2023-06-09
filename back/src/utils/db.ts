import mysql from "mysql2/promise";

import config from "./config";
import createLogger from "./logger";

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "solutoria",
  port:3306,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
  multipleStatements: true,
 
});

pool
  .getConnection()
  .then((conn: any) => {
    createLogger.info({
      util: "database",
      message: "Database connected",
    });
  })
  .catch((err: any) => {
    createLogger.error({
      util: "database",
      error: err,
    });
  });

export default pool;
