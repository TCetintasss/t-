const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  socketId: String,
  gold: { type: Number, default: 0 },
  crystal: { type: Number, default: 0 },
  stage: { type: Number, default: 1 },
  prestigeLevel: { type: Number, default: 0 },
  maxBossLevel: { type: Number, default: 1 },
  maxDamage: { type: Number, default: 0 },
  totalTaps: { type: Number, default: 0 },
  upgrades: {
    tap: { type: Number, default: 1 },
    autoTap: { type: Number, default: 0 }
  },
  inventory: { type: Array, default: [] },
  equipment: { type: Object, default: {} }
}, { timestamps: true });

module.exports = mongoose.models.Player || mongoose.model('Player', PlayerSchema);
