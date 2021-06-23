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
const dotenv = requiere('dotenv');
dotenv.config({path:'./env/.env'});

//4 Setear eldirectorio público
app.use('/resources', express.static('public'));
app.use('/resources', express.static( __dirname + '/public'));

console.log(__dirname);

app.get('/',(req,res)=>{
    res.send('Hola Mundo210255');
})

