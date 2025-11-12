export default function PositionPerformance() {
  const positions = [
    {
      title: "Frontend Developer Intern",
      applications: 45,
      views: 234,
      hired: 1,
      conversion: 2.2,
    },
    {
      title: "Data Science Intern",
      applications: 78,
      views: 456,
      hired: 2,
      conversion: 2.6,
    },
    {
      title: "Product Design Intern",
      applications: 32,
      views: 189,
      hired: 1,
      conversion: 3.1,
    },
    {
      title: "Marketing Intern",
      applications: 24,
      views: 145,
      hired: 0,
      conversion: 0,
    },
  ];

  return (
      <div className="internships-card card-box">
        <div className="header">
          <i className="fa-regular fa-chart-bar"></i>
          <div>
            <h6>Position Performance</h6>
            <p>Applications and conversion rates by position</p>
          </div>
        </div>

        <div className="internship-list">
          {positions.map((pos, i) => (
            <div key={i} className="internship-item">
              {/* Info Section */}
              <div className="info-section">
                <div className="icon">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <div className="text">
                  <div className="title">{pos.title}</div>
                  <div className="department text-muted small">
                    {pos.applications} applications • {pos.views} views
                  </div>
                </div>
              </div>

              {/* Meta Section */}
              <div className="meta-section">
                <div className="hired text-success fw-bold">
                  {pos.hired} hired
                </div>
                <div className="conversion text-muted small">
                  {pos.conversion}% conversion
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
