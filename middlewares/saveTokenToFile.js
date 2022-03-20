const tokenToFile = require('../services/tokenToFile');

async function saveTokenToFile(req, res, next) {
  next();

  const token = req.headers.authorization;
  try {
    await tokenToFile(token);
  } catch (err) {
    console.error(err);
  }
}

module.exports = saveTokenToFile;
