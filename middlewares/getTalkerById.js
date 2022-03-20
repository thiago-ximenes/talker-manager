const findTalkerById = require('../services/findTalkerById');

async function showTalkerById(req, res, next) {
  try {
    const { id } = req.params;
    
    const talkerFound = await findTalkerById(id);

    req.talker = talkerFound;
  } catch (err) {
    console.log(err);
  }

  next();
}

module.exports = showTalkerById;
