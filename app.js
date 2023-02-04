const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');


crearArchivo( argv )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) );