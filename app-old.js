const http = require('http')

http.createServer((req, res) => {
        res.writeHead(200, { 'Contect-Type': 'application/json' });

        let salida = {
            nombre: 'César',
            apellido: 'Mariluz'
        }

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando en el puerto 8080');