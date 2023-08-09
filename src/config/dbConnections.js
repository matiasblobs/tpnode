const mysql=require('mysql');


module.exports = ()=>{
    return mysql.createConnection({
        host: '149.100.155.204',
        user: 'u236440595_nodetest',
        insecureAuth : true,
        password: 'Charlotte@4411',
        database: 'u236440595_nodetest'
    });
} 
