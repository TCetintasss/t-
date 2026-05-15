export default function RewardPopup({ reward }) {
  if (!reward) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 20,
      right: 20,
      background: '#1f2937',
      color: 'white',
      padding: 16,
      borderRadius: 12
    }}>
      Reward: {reward}
    </div>
  );
}
