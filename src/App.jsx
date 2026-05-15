import { useMemo, useState } from 'react';

export default function App() {
  const [bossHp, setBossHp] = useState(1000);
  const [maxHp, setMaxHp] = useState(1000);
  const [gold, setGold] = useState(0);
  const [stage, setStage] = useState(1);
  const [tapLevel, setTapLevel] = useState(1);
  const [prestige, setPrestige] = useState(0);
  const [drops, setDrops] = useState([]);

  const damage = useMemo(() => {
    return Math.floor((10 + tapLevel * 5) * (1 + prestige * 0.2));
  }, [tapLevel, prestige]);

  function tapBoss() {
    const next = bossHp - damage;

    if (next <= 0) {
      const nextStage = stage + 1;
      const hp = 1000 + nextStage * 150;

      setGold((g) => g + 50);
      setStage(nextStage);
      setBossHp(hp);
      setMaxHp(hp);

      const loot = ['Sword', 'Armor', 'Ring', 'Relic'];
      const item = loot[Math.floor(Math.random() * loot.length)];

      setDrops((d) => [item, ...d.slice(0, 5)]);
      return;
    }

    setBossHp(next);
  }

  function upgradeTap() {
    const cost = tapLevel * 100;

    if (gold < cost) {
      return;
    }

    setGold((g) => g - cost);
    setTapLevel((l) => l + 1);
  }

  function doPrestige() {
    if (stage < 10) {
      return;
    }

    setPrestige((p) => p + 1);
    setStage(1);
    setGold(0);
    setTapLevel(1);
    setBossHp(1000);
    setMaxHp(1000);
  }

  return (
    <div className="app">
      <div className="topbar">
        <div>Gold: {gold}</div>
        <div>Stage: {stage}</div>
        <div>Prestige: {prestige}</div>
      </div>

      <div className="boss-area">
        <div className="boss">👹</div>

        <div className="hp-bar">
          <div
            className="hp-fill"
            style={{ width: `${(bossHp / maxHp) * 100}%` }}
          />
        </div>

        <div className="hp-text">
          {bossHp} / {maxHp}
        </div>

        <button className="tap-btn" onClick={tapBoss}>
          TAP {damage}
        </button>
      </div>

      <div className="controls">
        <button onClick={upgradeTap}>
          Upgrade Tap ({tapLevel * 100}G)
        </button>

        <button onClick={doPrestige}>
          Prestige
        </button>
      </div>

      <div className="drops">
        <h3>Recent Drops</h3>

        {drops.map((drop, i) => (
          <div key={i} className="drop-item">
            ✨ {drop}
          </div>
        ))}
      </div>
    </div>
  );
}
