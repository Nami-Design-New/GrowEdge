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
    <div className="category-tabs d-flex gap-2 mt-3 overflow-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`category-tab ${activeCategory === cat ? "active" : ""}`}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
