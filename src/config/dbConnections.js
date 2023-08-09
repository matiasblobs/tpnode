const mysql=require('mysql');


module.exports = ()=>{
    return mysql.createConnection({
        host: '200.58.112.219',
        user: 'o6000803_tpnode',
        insecureAuth : true,
        password: 'seweGUbi27',
        database: 'o6000803_tpnode'
    });
} 
