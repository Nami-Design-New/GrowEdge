export default function ResponseRate() {
  const metrics = [
    { title: "Current Response Rate", value: "78%", target: "85%", type: "rate" },
    { title: "Avg Response Time", value: "2.3", unit: "days", comparison: "Industry avg: 3.1 days", type: "time" },
    { title: "Candidate Experience Score", value: "4.1", type: "score", note: "Based on feedback" },
  ];

  return (
    <div className="card-box response-rate-card">
      <h6>Response Rate Analysis</h6>
      <p>How quickly you respond to applications affects candidate experience</p>

      <div className="metrics">
        {metrics.map((metric, i) => (
          <div key={i} className="metric-card">
            <strong>
              {metric.value} {metric.unit && <span>{metric.unit}</span>}
            </strong>
            <span>{metric.title}</span>
            {metric.target && <small>Target: {metric.target}</small>}
            {metric.comparison && <small>{metric.comparison}</small>}
            {metric.note && <small>{metric.note}</small>}
          </div>
        ))}
      </div>
    </div>
  );
}
