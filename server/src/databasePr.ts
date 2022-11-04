import mysql from "promise-mysql";
import keysPr from "./keysPr";

const pool = mysql.createPool(keysPr.database);

pool.getConnection().then((connection) => {
  pool.releaseConnection(connection);
  console.log("JALA LA BASE DE DATOS");
});

export default pool;
