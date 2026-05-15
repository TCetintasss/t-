const RARITIES = ['common', 'rare', 'epic', 'legendary', 'mythic'];

function createItem(type, rarityIndex) {
  const index = rarityIndex || 0;

  return {
    type,
    rarity: RARITIES[index],
    power: (index + 1) * 10
  };
}

function mergeItems(a, b) {
  if (a.type !== b.type) {
    return null;
  }

  let next = RARITIES.indexOf(a.rarity) + 1;

  if (next >= RARITIES.length) {
    next = RARITIES.length - 1;
  }

  return createItem(a.type, next);
}

module.exports = {
  createItem,
  mergeItems
};
