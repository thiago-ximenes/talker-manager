const fs = require('fs').promises;

async function readTokenFile() {
  const archiveName = 'token.json';
  const result = await fs.readFile(archiveName, 'utf8', (err, data) => {
      if (err) {
        console.error(`Não foi possível ler o arquivo ${archiveName}\n Erro: ${err}`);
        process.exit(1);
      }
      return data;
    });
    return result;
}

module.exports = readTokenFile;
