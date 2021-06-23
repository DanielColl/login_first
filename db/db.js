
//Llamamos el módulopara la conexión
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

//Catch si hay errores
connection.connect((error)=>{
    if(error){
        console.log('Conectado a la base de datos');
    }
});


//con module.exports podemos reutilizar la conexión invocandola

module.exports= connection;