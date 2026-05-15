const taps = new Map();

function canTap(playerId) {
  const now = Date.now();
  const last = taps.get(playerId) || 0;

  if (now - last < 40) {
    return false;
  }

  taps.set(playerId, now);
  return true;
}

module.exports = {
  canTap
};
