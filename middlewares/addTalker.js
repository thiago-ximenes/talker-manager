const getTalkerId = require('../services/addTalkerId');
const createTalker = require('../services/createTalker');
// const getTalkers = require('../services/getTalkers');

async function addTalker(req, res) {
  const { name, age, talk } = req.body;
  
  const token = req.headers.authorization;
  console.log(token);

  if (!token) return res.status(401).json({ message: 'Token não encontrado' });
  if (token.length < 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  const id = await getTalkerId();
  
  await createTalker([{
    id, name, age, talk,
  }], 'talker.json');
  return res.status(201).json({
    id, name, age, talk,
  });
}

module.exports = addTalker;
