export default function EarningsByType() {
  const earningsData = [
    {
      type: "Career Strategy",
      amount: "$6,750",
      sessions: 45,
      percent: 35,
    },
    {
      type: "Interview Prep",
      amount: "$4,560",
      sessions: 38,
      percent: 28,
    },
    {
      type: "Resume Review",
      amount: "$4,800",
      sessions: 32,
      percent: 22,
    },
    {
      type: "Leadership Coaching",
      amount: "$3,750",
      sessions: 25,
      percent: 15,
    },
  ];

  return (
    <div className="earnings-card mt-4 ">
      <h6 className="fw-bold mb-1">Earnings by Session Type</h6>
      <p className="text-muted small mb-3">
        Revenue breakdown by coaching type this month
      </p>

      <div className="session-types">
        {earningsData.map((item, index) => (
          <div className="session-item mb-3" key={index}>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <h6 className="mb-0">{item.type}</h6>
              <span className="text-muted small">
                {item.amount} ({item.sessions} sessions)
              </span>
            </div>

            <div className="progress-container">
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
              <span className="percent-text">{item.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
