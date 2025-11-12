export default function PerformanceRecommendations() {
  const recommendations = [
    {
      title: "Optimize Interview Scheduling",
      description:
        "Your technical interview stage is taking 2.5 days longer than target. Consider implementing automated scheduling to reduce delays.",
      type: "blue",
    },
    {
      title: "Excellent Response Time",
      description:
        "Your 2.3-day response time is 25% faster than industry average. This positively impacts candidate experience.",
      type: "green",
    },
    {
      title: "Expand University Partnerships",
      description:
        "Consider partnering with more universities. Your current top sources have high-quality candidates but limited volume.",
      type: "yellow",
    },
  ];

  return (
    <div className="recent-card performance-recommendations-card">
      <div className="header">
        <i className="fa-solid fa-lightbulb"></i>
        <div>
          <h6>Performance Recommendations</h6>
          <p>AI-powered insights to improve your hiring process</p>
        </div>
      </div>

      <div className="activity-list">
        {recommendations.map((rec, i) => (
          <div key={i} className={`activity-item ${rec.type}`}>
            <p>{rec.title}</p>
            <small>{rec.description}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
