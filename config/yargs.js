const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    describe:'Es la base de la tabla de multiplicar',
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe:'Muestra la tabla en consola'
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default:10,
    describe:'muestra el numero donde llega la tabla'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base debe ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
