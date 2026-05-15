const players = new Map();

function getPlayer(id) {
  if (!players.has(id)) {
    players.set(id, {
      id,
      gold: 0,
      crystal: 0,
      level: 1,
      stage: 1,
      prestigeLevel: 0,
      maxBossLevel: 1,
      maxDamage: 0,
      totalTaps: 0,
      inventory: [],
      equipment: {},
      upgrades: { tap: 1, autoTap: 0 }
    });
  }

  return players.get(id);
}

function savePlayer(player) {
  players.set(player.id, player);
  return player;
}

module.exports = { getPlayer, savePlayer };
