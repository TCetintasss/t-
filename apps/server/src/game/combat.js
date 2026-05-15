function getBossHp(stage, phase) {
  const phaseMultiplier = 1 + ((phase || 1) - 1) * 0.5;
  return Math.floor(500 + stage * 180 * phaseMultiplier);
}

function calculateDamage(player) {
  const base = 10 + player.upgrades.tap * 5;
  const prestigeBonus = 1 + player.prestigeLevel * 0.08;
  const skillBonus = 1 + ((player.skills && player.skills.tapPower) || 0) * 0.05;
  const critChance = Math.min(0.05 + ((player.skills && player.skills.critChance) || 0) * 0.02, 0.3);
  const crit = Math.random() < critChance;
  const damage = Math.floor(base * prestigeBonus * skillBonus * (crit ? 2 : 1));

  return { damage, crit };
}

function nextBossState(stage) {
  const isBoss = stage % 10 === 0;
  return {
    id: `enemy-${stage}`,
    stage,
    phase: 1,
    maxPhase: isBoss ? 3 : 1,
    hp: getBossHp(stage, 1),
    maxHp: getBossHp(stage, 1),
    isBoss
  };
}

function advancePhase(enemy) {
  if (enemy.phase < enemy.maxPhase) {
    enemy.phase += 1;
    enemy.hp = getBossHp(enemy.stage, enemy.phase);
    enemy.maxHp = enemy.hp;
    return enemy;
  }

  return null;
}

module.exports = {
  getBossHp,
  calculateDamage,
  nextBossState,
  advancePhase
};
