const fs = require('fs').promises;

const tokenGenerator = require('../services/tokenGenerator');

async function genToken(req, res, next) {
  const token = tokenGenerator();
  req.headers.authorization = token;

  try {
    await fs.writeFile('./token.json', JSON.stringify(token));
  } catch (err) {
    console.error(err);
  }

  next();
}

module.exports = genToken;
