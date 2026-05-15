export default function BossBar({ hp, maxHp, phase }) {
  const width = Math.max((hp / maxHp) * 100, 0);

  return (
    <div>
      <div>Boss Phase {phase}</div>
      <div style={{ background: '#222', height: 24, borderRadius: 12 }}>
        <div style={{
          width: `${width}%`,
          height: 24,
          background: '#ef4444',
          borderRadius: 12,
          transition: 'width 0.15s linear'
        }} />
      </div>
    </div>
  );
}
