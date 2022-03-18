// https://stackoverflow.com/questions/8532406/create-a-random-token-in-javascript-based-on-user-details

function randomToken() {
  return Math.random().toString(36).substring(2);
}

function tokenGenerator() {
  return (randomToken() + randomToken()).substring(0, 16);
}

module.exports = tokenGenerator;
