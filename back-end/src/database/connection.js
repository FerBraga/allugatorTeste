const dotenv = require ('dotenv');
const  mysql = require('mysql2/promise') ;

dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  password: process.env.MYSQL_ROOT_PASSWORD || 'Fb97016949',
  user: process.env.MYSQL_USER || 'root',
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT
}); 


module.exports = connection;