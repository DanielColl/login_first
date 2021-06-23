// 1 Invocamos Express
const express = require('express');
const app = express();

const port = 5000;

app.listen(port, (req,res)=>{
    console.log('Server running on port ' + port)
})

//2 Seteamos urlencoder para capturar los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//3 Invocar dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//4 Setear eldirectorio público
app.use('/resources', express.static('public'));
app.use('/resources', express.static( __dirname + '/public'));
console.log(__dirname);

//5 Establecer el motor de plantillas
app.set('view engine', 'ejs');

//6 Invocar bcryptjs
const bcryptjs = require('bcryptjs');

//7 Variables de sesion
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

//8 Invocamos al módulo de conexión de la BD
const connection = require('./db/db');



//9 establecer rutas de la app
app.get('/',(req,res)=>{
    res.send('index');
}); 

