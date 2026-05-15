const sessions = new Map();

function saveSession(playerId, state) {
  sessions.set(playerId, state);
}

function restoreSession(playerId) {
  return sessions.get(playerId) || null;
}

module.exports = {
  saveSession,
  restoreSession
};
