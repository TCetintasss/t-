function buyAutoTap(player) {
  const cost = 100;

  if (player.gold < cost) {
    return false;
  }

  player.gold -= cost;
  player.upgrades.autoTap += 1;

  return true;
}

function buyTapUpgrade(player) {
  const cost = 50;

  if (player.gold < cost) {
    return false;
  }

  player.gold -= cost;
  player.upgrades.tap += 1;

  return true;
}

module.exports = {
  buyAutoTap,
  buyTapUpgrade
};
