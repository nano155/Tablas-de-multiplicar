const fs = require("fs");
require("colors")
const crearArchivo = async (number, listar, hasta) => {
  try {
    let salida = "";
    let consola ="";


    for (let index = 1; index <= hasta; index++) {
      salida += `${number} ${'x'.red} ${index} = ${number * index}\n`;
      consola += `${number} x ${index} = ${number * index}\n`;
    }
    if (listar) {
      console.log("==============================".green);
      console.log(`    TABLA DEL: ${number}      `);
      console.log("==============================".green);

      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${number}.txt`, consola);

    return `tabla-${number}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
