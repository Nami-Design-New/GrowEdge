export default function PerformanceMetrics() {
  const metrics = [
    {
      title: "Client Satisfaction",
      value: 4.8,
      max: 5,
    },
    {
      title: "Session Completion Rate",
      value: 94,
      max: 100,
    },
    {
      title: "Client Retention",
      value: 87,
      max: 100,
    },
    {
      title: "Referral Rate",
      value: 23,
      max: 100,
    },
  ];

  return (
    <div className="performance-metrics mt-4">
      <h6 className="fw-bold mb-1">Performance Metrics</h6>
      <p className="text-muted small mb-3">
        Key performance indicators for your coaching business
      </p>

      <div className="metrics-list">
        {metrics.map((item, i) => {
          const percentage = (item.value / item.max) * 100;

          return (
            <div className="metric-item mb-3" key={i}>
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h6 className="metric-title mb-0">{item.title}</h6>
                <span className="metric-value fw-bold">
                  {item.max === 5
                    ? `${item.value.toFixed(1)}/${item.max}`
                    : `${item.value}%`}
                </span>
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{
                    width: `${percentage}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
