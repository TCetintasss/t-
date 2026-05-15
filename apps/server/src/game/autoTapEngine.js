function runAutoTap(player, enemy) {
  const autoTapLevel = player.upgrades.autoTap || 0;

  if (autoTapLevel <= 0) {
    return 0;
  }

  const damage = autoTapLevel * 3;
  enemy.hp -= damage;

  return damage;
}

module.exports = {
  runAutoTap
};
