const express = require('express');
const app = express();

//Importando HBS
const hbs = require('hbs');
require('./hbs/helpers');

//Importando variables de entorno
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        Nombre: 'CÉSAR MARILUZ esmeralda'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});


app.listen(port, () => {
    let date = new Date();
    console.log(`Escuchando en el puerto ${port}. Ultima actualización: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
});