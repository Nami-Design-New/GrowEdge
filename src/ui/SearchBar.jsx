import React from "react";
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

        {/* Category select */}
        <Form.Select className="category-select">
          <option>All Categories</option>
          <option>Technology</option>
          <option>Product</option>
          <option>Entrepreneurship</option>
        </Form.Select>
      </div>
    </div>
  );
}
