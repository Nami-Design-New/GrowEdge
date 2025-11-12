export default function ApplicationsHeader({
  searchTerm,
  setSearchTerm,
  filterPosition,
  setFilterPosition,
  filterStatus,
  setFilterStatus,
}) {
  return (
    <div className="applications-header">
      {/* Search Candidates */}
      <div className="search-candidates">
        <div className="search-input">
          <i className="fa fa-search search-icon"></i>
          <input
            type="text"
            placeholder="Search candidates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Positions */}
      <div className="filter-positions">
        <select
          value={filterPosition}
          onChange={(e) => setFilterPosition(e.target.value)}
        >
          <option value="">All Positions</option>
          <option value="frontend">Frontend Developer</option>
          <option value="data science">Data Science</option>
          <option value="product design">Product Design</option>
        </select>
      </div>

      {/* Filter Status */}
      <div className="filter-status">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="interview">Interview</option>
          <option value="final">Final</option>
          <option value="reviewing">Reviewing</option>
          <option value="offer">Offer</option>
        </select>
      </div>
    </div>
  );
}
