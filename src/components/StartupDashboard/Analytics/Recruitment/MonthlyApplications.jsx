export default function MonthlyApplications() {
  const trends = [
    { period: "This Week", applications: 28, views: 156, hired: 2 },
    { period: "This Month", applications: 120, views: 680, hired: 6 },
    { period: "Last Month", applications: 95, views: 520, hired: 4 },
  ];

  return (
    <div className="card-box monthly-applications-card">
      <h6>Monthly Application Trends</h6>
      <p>Track application volume and quality over time</p>

      <div className="trends-list">
        {trends.map((trend, i) => (
          <div key={i} className="trend-item">
            <div className="metrics">
              <div className="metric-card period">
                <strong>{trend.period}</strong>
              </div>
              <div className="metric-card applications">
                <strong>{trend.applications}</strong>
                <span>Applications</span>
              </div>
              <div className="metric-card views">
                <strong>{trend.views}</strong>
                <span>Views</span>
              </div>
              <div className="metric-card hired">
                <strong>{trend.hired}</strong>
                <span>Hired</span>
              </div>
            </div>
            {i < trends.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
  );
}
