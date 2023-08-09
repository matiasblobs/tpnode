const mysql=require('mysql');


module.exports = ()=>{
    return mysql.createConnection({
        host: 'mysql21slv.linux.backend',
        user: 'o6000803_tpnode',
        insecureAuth : true,
        password: 'seweGUbi27',
        database: 'o6000803_tpnode'
    });
} 
