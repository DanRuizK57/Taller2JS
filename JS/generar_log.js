function generarArchivoLog(logs, nombreArchivo) {

    const fs = require("fs");
    fs.writeFile(nombreArchivo, logs, (err) => {
        if (err) throw err;
    });
}

module.exports = generarArchivoLog;