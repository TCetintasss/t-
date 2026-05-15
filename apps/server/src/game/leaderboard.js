const cache = {
  data: [],
  updatedAt: 0
};

const TEN_MINUTES = 1000 * 60 * 10;

function setLeaderboard(entries) {
  cache.data = entries;
  cache.updatedAt = Date.now();
}

function getLeaderboard() {
  return {
    cached: Date.now() - cache.updatedAt < TEN_MINUTES,
    updatedAt: cache.updatedAt,
    entries: cache.data
  };
}

module.exports = {
  setLeaderboard,
  getLeaderboard,
  TEN_MINUTES
};
