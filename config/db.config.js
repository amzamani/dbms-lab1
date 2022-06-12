const configHolder = require('./config');
const mysql = require('mysql2');
require('dotenv').config();
// console.log(process.env) ;
//local db
// const pool  = mysql.createPool({
//     connectionLimit : 10,
//     host: configHolder.host_name,
//     user: "mo-atef",
//     password: "password",
//     database: configHolder.database,
//     multipleStatements: true
// });


// remote db
const pool  = mysql.createPool({
    connectionLimit : 10,
    host: process.env.HOST,
    user: 	    process.env.USER_SQL,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true
});



// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.');
        }
    }

    if (connection) connection.release();

    return
})

module.exports = pool;