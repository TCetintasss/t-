function distributeRaidRewards(room) {
  const rewards = [];

  for (const playerId of room.players) {
    const damage = room.damage[playerId] || 0;

    rewards.push({
      playerId,
      gold: Math.floor(damage * 0.5),
      crystal: Math.floor(damage * 0.05)
    });
  }

  return rewards;
}

module.exports = {
  distributeRaidRewards
};
