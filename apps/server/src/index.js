const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

const enemies = new Map();

io.on('connection', (socket) => {
  socket.on('PLAYER_TAP', ({ enemyId, damage }) => {
    const enemy = enemies.get(enemyId) || { hp: 1000 };
    enemy.hp -= Math.min(damage, 500);

    if (enemy.hp <= 0) {
      io.emit('ENEMY_DEAD', { enemyId });
      enemy.hp = 1000;
    }

    enemies.set(enemyId, enemy);
    io.emit('DAMAGE_CALCULATED', {
      enemyId,
      hp: enemy.hp
    });
  });
});

app.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

server.listen(process.env.PORT || 3001, () => {
  console.log('server running');
});
