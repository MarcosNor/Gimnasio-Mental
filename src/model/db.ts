import mysql from 'mysql2/promise';

const CONFIG = {
     host: 'localhost', 
     user:'admin', 
     password: '1234',
     connectionLimit: 5,
     database: 'gimnasio_mental'
};



const connectionConfig = process.env.DATABASE_URL ?? CONFIG

export const db = mysql.createPool(connectionConfig)