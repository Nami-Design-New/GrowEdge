export default function PerformanceCard() {
  const performanceData = [
    { label: "Session Goal", value: "28/30 sessions", percent: 93 },
    { label: "Client Satisfaction", value: "4.9/5.0", percent: 98 },
    { label: "Response Rate", value: "95%", percent: 95 },
  ];

  const achievements = [
    { label: "Career Goals Achieved", value: 15 },
    { label: "Interviews Secured", value: 22 },
  ];

  return (
    <div className="col-lg-8">
      <div className="performance-card card-box">
        <div className="header">
          <i className="fa-solid fa-chart-line"></i>
          <div>
            <h6>Performance This Month</h6>
            <p>Your coaching performance metrics for March 2024</p>
          </div>
        </div>

        <div className="stats">
          {performanceData.map((item, i) => (
            <div key={i} className="stat-item">
              <div className="stat-header">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
              <div className="progress-bar-wrapper">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements">
          {achievements.map((a, i) => (
            <div key={i} className="achievement">
              <h4>{a.value}</h4>
              <p>{a.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
