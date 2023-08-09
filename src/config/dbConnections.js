const mysql=require('mysql');


module.exports = ()=>{
    return mysql.createConnection({
        host: 'sql.freedb.tech',
        user: 'freedb_matiasblobs',
        insecureAuth : true,
        password: 'An*Hm$?uVY4z92U',
        database: 'freedb_testeonode'
    });
} 
