const getTalkers = require('../services/getTalkers');

async function findTalkerById(req, res) {
  try {
    const { id } = req.params;
    const talkers = await getTalkers();
    const talkerFound = talkers.find((talker) => talker.id === Number(id));
    if (!talkerFound) {
      res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(talkerFound);
  } catch (err) {
    console.log(err);
  }
}

module.exports = findTalkerById;
