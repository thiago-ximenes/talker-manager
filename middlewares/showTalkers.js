const getTalkers = require('../services/getTalkers');

async function showTalkers(req, res) {
  try {
    const talkers = await getTalkers();
    return res.status(200).json(talkers);
  } catch (err) {
    console.log(err);
  }
}

module.exports = showTalkers;