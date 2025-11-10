import { useTranslation } from "react-i18next";

const categories = [
  { key: "all", iconClass: "fa-solid fa-filter" },
  { key: "entrepreneurship", iconClass: "fa-solid fa-lightbulb" },
  { key: "softwareDev", iconClass: "fa-solid fa-code" },
  { key: "technology", iconClass: "fa-solid fa-microchip" },
];

const BlogFilter = ({ activeCategory, setActiveCategory, searchText, setSearchText }) => {
  const { t } = useTranslation();

  return (
    <div className="blog-filter container mb-4">
      <div className="search-wrapper">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          placeholder={t("blog.searchPlaceholder", "...البحث في المقالات")}
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="tabs d-flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`category-btn ${activeCategory === cat.key ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.iconClass && <i className={`${cat.iconClass} icon`}></i>}
            {t(`blog.categories.${cat.key}`, cat.key)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogFilter;
