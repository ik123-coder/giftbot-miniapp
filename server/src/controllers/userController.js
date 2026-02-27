const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    let user = await User.findOne({ telegramId: req.telegramUser.id });

    if (!user) {
      user = new User({
        telegramId: req.telegramUser.id,
        firstName: req.telegramUser.first_name,
        username: req.telegramUser.username,
      });
      await user.save();
    }

    res.json({
      firstName: user.firstName,
      balance: user.balance,
      referralCount: user.referralCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateBalance = async (req, res) => {
  const { amount } = req.body; // number, может быть отрицательным

  if (typeof amount !== 'number') {
    return res.status(400).json({ error: 'Amount must be a number' });
  }

  try {
    const user = await User.findOneAndUpdate(
      { telegramId: req.telegramUser.id },
      { $inc: { balance: amount } },
      { new: true, runValidators: true }
    );

    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json({ balance: user.balance });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};