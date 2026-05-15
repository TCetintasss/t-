const drops = [
  { type: 'sword', chance: 0.4 },
  { type: 'armor', chance: 0.3 },
  { type: 'ring', chance: 0.2 },
  { type: 'artifact', chance: 0.08 },
  { type: 'relic', chance: 0.02 }
];

function rollDrop() {
  const random = Math.random();
  let total = 0;

  for (const drop of drops) {
    total += drop.chance;

    if (random <= total) {
      return drop.type;
    }
  }

  return 'gold';
}

module.exports = {
  rollDrop
};
