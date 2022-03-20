const createTalker = require('../services/createTalker');
const getTalkers = require('../services/getTalkers');

async function deleteTalker(req, res) {
  const { talkerIndex } = req.talker;

  const talkers = await getTalkers();
  console.log(talkerIndex);
  console.log(req.talker);
  talkers.splice(talkerIndex, 1);
  console.log(talkers);
  await createTalker(talkers, './talker.json');

  return res.status(204).end();
}

module.exports = deleteTalker;