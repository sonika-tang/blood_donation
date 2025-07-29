const db = require('../models');
const History = db.History;

exports.getUserHistory = async (req, res) => {
  try {
    const history = await History.findAll({ where: { user_id: req.user.user_id } });
    return res.json(history);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
