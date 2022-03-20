const fs = require('fs').promises;

async function tokenToFile(token) {
  try {
    console.log('Data saved');
    return await fs.writeFile('./token.json', JSON.stringify(token));
  } catch (err) {
    console.error(err);
  }
}

module.exports = tokenToFile;
