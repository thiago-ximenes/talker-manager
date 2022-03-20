const getTalkers = require('./getTalkers');

async function findTalkerById(id) {
  const talkers = await getTalkers();
  const talkerFound = talkers.find((talker) => talker.id === Number(id));
  const talkerIndex = talkers.findIndex((talker) => talker.id === Number(id));
  const talkerFoundANdIndex = { talkerIndex, talkerFound };
  return talkerFoundANdIndex;
}

module.exports = findTalkerById;
