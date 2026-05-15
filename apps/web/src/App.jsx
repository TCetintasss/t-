import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

export default function App() {
  const [hp, setHp] = useState(1000);

  useEffect(() => {
    socket.on('DAMAGE_CALCULATED', (data) => {
      setHp(data.hp);
    });

    socket.on('ENEMY_DEAD', () => {
      setHp(1000);
    });
  }, []);

  function tap() {
    socket.emit('PLAYER_TAP', {
      enemyId: 'boss-1',
      damage: 25
    });
  }

  return (
    <div>
      <h1>TAPTAP BOSS</h1>
      <h2>Boss HP: {hp}</h2>
      <button onClick={tap}>TAP</button>
    </div>
  );
}
