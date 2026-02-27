const User = require('../models/User');

class UserService {
  static async findOrCreate(telegramUser) {
    let user = await User.findOne({ telegramId: telegramUser.id });

    if (!user) {
      user = new User({
        telegramId: telegramUser.id,
        firstName: telegramUser.first_name,
        username: telegramUser.username,
        photoUrl: telegramUser.photo_url,
      });
      await user.save();
    }

    return user;
  }

  static async updateBalance(telegramId, amount) {
    if (typeof amount !== 'number') throw new Error('Amount must be number');

    const user = await User.findOneAndUpdate(
      { telegramId },
      { $inc: { balance: amount }, lastActive: new Date() },
      { new: true, runValidators: true }
    );

    if (!user) throw new Error('User not found');
    if (user.balance < 0) throw new Error('Insufficient balance');

    return user.balance;
  }
}

module.exports = UserService;