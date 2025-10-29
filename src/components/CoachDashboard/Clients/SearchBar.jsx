import { Form } from "react-bootstrap";

export default function SearchBar() {
  return (
    <div className="search-bar container">
      <div className="search-wrapper">
        {/* Search input */}
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <Form.Control
            type="text"
            placeholder="Search sessions or coaches..."
          />
        </div>

        {/* Filter button */}
        <button className="filter-btn">
          <i className="fa-solid fa-filter"></i>
        </button>
      </div>
    </div>
  );
}
