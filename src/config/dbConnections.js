const mysql=require('mysql');

// Este codigo me conecta con una base de datos externa que tengo alojada en un servidor Hostinger

module.exports = ()=>{
    return mysql.createConnection({
        host: '149.100.155.204',
        user: 'u236440595_nodetest',
        insecureAuth : true,
        password: 'Charlotte@4411',
        database: 'u236440595_nodetest'
    });
} 
