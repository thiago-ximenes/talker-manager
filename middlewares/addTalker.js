function addTalker(req, res) {
  const {
    name,
    age,
    talk: {
      watchedAt,
      rate,
    },
  } = req.body;
}

module.exports = addTalker;
