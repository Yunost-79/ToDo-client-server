const { Schema, model } = require('mongoose');

const TokenSchema = new Schema({
  isActivated: { type: Boolean, default: false },
  refreshToken: { type: String, required: true },
});

module.exports = model('Token', TokenSchema);
