const skills = {
  tapPower: {
    max: 10,
    crystalCost: 10
  },
  critChance: {
    max: 5,
    crystalCost: 25
  },
  bossDamage: {
    max: 10,
    crystalCost: 40
  }
};

function upgradeSkill(player, skill) {
  if (!skills[skill]) {
    return false;
  }

  player.skills = player.skills || {};
  player.skills[skill] = player.skills[skill] || 0;

  if (player.skills[skill] >= skills[skill].max) {
    return false;
  }

  if (player.crystal < skills[skill].crystalCost) {
    return false;
  }

  player.crystal -= skills[skill].crystalCost;
  player.skills[skill] += 1;

  return true;
}

module.exports = {
  skills,
  upgradeSkill
};
