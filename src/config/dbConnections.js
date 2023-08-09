const mysql=require('mysql');


module.exports = ()=>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        insecureAuth : true,
        password: '',
        database: 'libreria03'
    });
} 