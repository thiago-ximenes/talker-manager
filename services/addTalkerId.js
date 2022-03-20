const getTalker = require('./getTalkers');

async function addTalkerId() {
  const talkers = await getTalker();
  const lastId = talkers[talkers.length - 1].id;
  return lastId + 1;
}

module.exports = addTalkerId;
