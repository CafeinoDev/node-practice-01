const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('f', {
        alias: 'fin',
        type: 'number',
        default: 10,
        describe: 'Hasta donde llegará la tabla'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw 'La base debe ser un número';
        }
        if( isNaN( argv.f ) ){
            throw 'El fin debe ser un número'
        }

        return true;
    } )
    .argv;

module.exports = argv;