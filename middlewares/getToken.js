const readTokenFile = require('../services/readTokenFile');

async function getToken(req, res, next) {
  const token = await readTokenFile();
  console.log(token);
  req.headers.authorization = JSON.parse(token);

  next();
}

module.exports = getToken;
