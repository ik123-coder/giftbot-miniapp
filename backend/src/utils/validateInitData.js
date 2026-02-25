const crypto = require('crypto');

const validateInitData = (initData, botToken) => {
  const secret = crypto
    .createHmac('sha256', 'WebAppData')
    .update(botToken)
    .digest();

  const data = new URLSearchParams(initData);
  const hash = data.get('hash');
  data.delete('hash');

  const dataCheckString = Array.from(data.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

  const hmac = crypto
    .createHmac('sha256', secret)
    .update(dataCheckString)
    .digest('hex');

  return hmac === hash;
};

module.exports = validateInitData;