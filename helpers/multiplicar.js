const fs = require('fs'); 
const colors = require('colors');

const crearArchivo = ( { b:base = 5, l:listar = false, f:fin = 10 } ) => {
    return new Promise( (resolve, reject) => {
        
    
        let salida = '';
        let consola = '';
    
        for(let i = 1; i <= fin; i++){
            salida  += `${ base } x ${ i } = ${ base*i }\n`;
            consola += `${ base } ${ 'x'.red } ${ i } ${ '='.red } ${ base*i }\n`;
        }
    
        if(listar){
            console.log(colors.green('=================='))
            console.log(colors.green('=='), 'Tabla del '+ base, colors.green('=='))
            console.log(colors.green('=================='))
            console.log(consola);
        }

        const filename = `tabla-${ base }.txt`;
    
        try{
            fs.writeFileSync( './output/' + filename, salida)
            resolve(filename)
        }catch(err){
            reject(err)
        }
    });

    

}

module.exports = {
    crearArchivo
}