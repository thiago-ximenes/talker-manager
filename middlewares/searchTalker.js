const getTalkers = require('../services/getTalkers');

async function searchTalker(req, res, next) {
  const { q } = req.query;

  const talkers = await getTalkers();
  const filteredTalker = talkers
    .filter((talker) => talker.name.includes(q));

  if (!q || q === '') return next();
  
  if (!filteredTalker) return res.status(200).json([]);

  return res.status(200).json(filteredTalker);
}

module.exports = searchTalker;
