const fs = require('fs').promises;

async function createTalker(content, archiveName) {
  try {
    return await fs.writeFile(archiveName, JSON.stringify(content));
  } catch (error) {
    console.log(error);
  }
}

module.exports = createTalker;
