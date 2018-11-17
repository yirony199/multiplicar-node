//requireds
const colors = require('colors');

const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');

const {
    argv
} = require("./config/yargs")

let comando = argv._[0];

switch (comando) {
    case "listar":
        console.log("listar")
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.green ( archivo) }`   ))
            .catch(err => console.log(err));
        break;
    default:
        console.log("Comando no reconociddo ")
        break;
}

// console.log("limite", argv.limite);

// let argv = process.argv;
// let param = argv[2];
// let base = param.split('=') [1];