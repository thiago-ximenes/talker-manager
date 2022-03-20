const getTalkers = require('./getTalkers');

async function findTalkerById(id) {
  const talkers = await getTalkers();
  const talkerFound = talkers.find((talker) => talker.id === Number(id));

  return talkerFound;
}

module.exports = findTalkerById;

findTalkerById(1).then((talker) => console.log(talker));