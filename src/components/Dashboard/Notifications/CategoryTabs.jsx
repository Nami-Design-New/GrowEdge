export default function CategoryTabs({ activeCategory, setActiveCategory }) {
  const categories = [
    "All",
    "Messages",
    "Sessions",
    "Applications",
    "Achievements",
    "System",
  ];

  return (
    <div className="tabs-common mt-3">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
