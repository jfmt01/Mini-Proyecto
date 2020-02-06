const express = require('express'),
        app = express(),
        path = require('path');

//Middleware que nos permite buscar los archivos de la carpeta public

app.use(express.static(path.join(__dirname, '/public')));

//Crear las rutas de la app

app.get('/', (req, res)=>{
        res.sendFile(`${__dirname}/views/index.html`);
});

app.route('/usuario').get((req, res)=>{
        res.sendFile(`${__dirname}/views/usuario.html`)
})

app.route('/usuario-login').get((req, res)=>{
        //Validar si los campos del formulario están vacíos
        if(req.query.nombre !== '' && req.query.password !== ''){
                res.sendFile(`${__dirname}/views/usuario-login.html`);
        }else{
                res.sendFile(`${__dirname}/views/error.html`);
        }
});

app.listen(8084);
console.log('Funciona!');