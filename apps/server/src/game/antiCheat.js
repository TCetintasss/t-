function validateTap(payload) {
  if (!payload) return false;

  if (payload.damage > 5000) {
    return false;
  }

  if (payload.damage < 0) {
    return false;
  }

  return true;
}

function detectDpsAnomaly(history) {
  const total = history.reduce((sum, value) => sum + value, 0);
  return total > 100000;
}

module.exports = {
  validateTap,
  detectDpsAnomaly
};
