const createTalker = require('../services/createTalker');
const getTalkers = require('../services/getTalkers');

async function editTalker(req, res) {
  const { id } = req.params;
  const { talkerFound, talkerIndex } = req.talker;
  const { name, age, talk: { watchedAt, rate } } = req.body;
  talkerFound.name = name;
  talkerFound.age = age;
  talkerFound.talk.watchedAt = watchedAt;
  talkerFound.talk.rate = rate;
  talkerFound.id = Number(id);

  const talkers = await getTalkers();
  talkers.splice(talkerIndex, 1, talkerFound);

  try {
    await createTalker(talkers, './talker.json');
  } catch (err) {
    console.error(err);
  }
  return res.status(200).json(talkerFound);
}

module.exports = editTalker;
