const getTalkerId = require('../services/addTalkerId');
const createTalker = require('../services/createTalker');

async function addTalker(req, res) {
  const { name, age, talk } = req.body;

  const id = await getTalkerId();
  
  await createTalker([{
    id, name, age, talk,
  }], 'talker.json');
  return res.status(201).json({
    id, name, age, talk,
  });
}

module.exports = addTalker;
