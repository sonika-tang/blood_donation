const db = require('../models');
const Inventory = db.Inventory;
const BloodType = db.BloodType;
const DonationCenter = db.DonationCenter;

exports.getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findAll({
      include: [
        { model: BloodType, attributes: ['blood_type'] },
        { model: DonationCenter, attributes: ['center_name', 'location'] }
      ]
    });
    return res.json(inventory);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
