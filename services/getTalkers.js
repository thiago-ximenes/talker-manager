const fs = require('fs').promises;

async function getTalkers() {
  try {
    const talkers = await fs.readFile('talker.json', 'utf8');
    return JSON.parse(talkers);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getTalkers;
