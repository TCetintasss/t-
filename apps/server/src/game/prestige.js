function canPrestige(player) {
  return player.stage >= 100;
}

function applyPrestige(player) {
  if (!canPrestige(player)) {
    return player;
  }

  player.prestigeLevel += 1;
  player.stage = 1;
  player.gold = 0;
  player.crystal += 100;

  return player;
}

module.exports = {
  canPrestige,
  applyPrestige
};
