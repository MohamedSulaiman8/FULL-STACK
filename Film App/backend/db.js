import mysql from"mysql";
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:"films",
})
export default db;

