export default function DamagePopup({ value, crit }) {
  return (
    <div style={{
      color: crit ? '#fde047' : '#ffffff',
      fontSize: crit ? 28 : 20,
      fontWeight: 'bold',
      animation: 'floatUp 0.4s ease-out'
    }}>
      {crit ? 'CRIT ' : ''}{value}
    </div>
  );
}
