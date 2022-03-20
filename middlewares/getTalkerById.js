const findTalkerById = require('../services/findTalkerById');

async function getTalkerById(req, res, next) {
  try {
    const { id } = req.params;

    console.log(id);
    
    const talkerFound = await findTalkerById(id);

    req.talker = talkerFound;
  } catch (err) {
    console.log(err);
  }

  next();
}

module.exports = getTalkerById;
