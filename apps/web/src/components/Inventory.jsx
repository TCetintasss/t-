export default function Inventory({ items = [] }) {
  return (
    <div>
      <h3>Inventory</h3>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            {item.type} - {item.rarity}
          </div>
        ))}
      </div>
    </div>
  );
}
