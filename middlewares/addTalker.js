const getTalkerId = require('../services/addTalkerId');
const createTalker = require('../services/createTalker');
const getTalkers = require('../services/getTalkers');

async function addTalker(req, res) {
  const { name, age, talk } = req.body;

  const id = await getTalkerId();
  const talkers = await getTalkers();

  talkers.push({
    id, name, age, talk,
  });
  console.log(talkers);

  await createTalker(talkers, 'talker.json');
  return res.status(201).json({
    id, name, age, talk,
  });
}

module.exports = addTalker;
