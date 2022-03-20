const { isDate } = require('validator');

function validateWatchedAt(req, res, next) {
  const { talk: { watchedAt } } = req.body;
  const isValidDate = isDate(watchedAt, { format: 'DD/MM/YYYY' });

  if (!watchedAt) {
    return res.status(400)
      .json(
        { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
      );
    }
  if (!isValidDate) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
}

module.exports = validateWatchedAt;
