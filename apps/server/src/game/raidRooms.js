const rooms = new Map();

function createRoom(id) {
  rooms.set(id, {
    id,
    players: [],
    damage: {}
  });

  return rooms.get(id);
}

function joinRoom(id, playerId) {
  const room = rooms.get(id) || createRoom(id);

  room.players.push(playerId);
  room.damage[playerId] = 0;

  return room;
}

function addDamage(id, playerId, amount) {
  const room = rooms.get(id);

  if (!room) {
    return;
  }

  room.damage[playerId] += amount;
}

module.exports = {
  createRoom,
  joinRoom,
  addDamage
};
