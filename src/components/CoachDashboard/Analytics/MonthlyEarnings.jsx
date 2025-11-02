export default function MonthlyEarningsTrend() {
  const earningsTrend = [
    { month: "Jan", earnings: "$3,200", sessions: 22, hours: 33 },
    { month: "Feb", earnings: "$4,100", sessions: 28, hours: 42 },
    { month: "Mar", earnings: "$4,800", sessions: 32, hours: 48 },
    { month: "Apr", earnings: "$5,200", sessions: 35, hours: 52 },
    { month: "May", earnings: "$4,900", sessions: 33, hours: 49 },
    { month: "Jun", earnings: "$5,500", sessions: 37, hours: 55 },
  ];

  return (
    <div className="monthly-earnings mt-4">
      <h6 className="fw-bold mb-1">Monthly Earnings Trend</h6>
      <p className="text-muted small mb-3">
        Your earnings performance over the last 6 months
      </p>

      <div className="trend-grid">
        {earningsTrend.map((item, index) => (
          <div className="trend-item" key={index}>
            <h6 className="month">{item.month}</h6>
            <p className="earnings fw-bold mb-1">{item.earnings}</p>
            <p className="details text-muted small mb-0">
              {item.sessions} sessions • {item.hours}h
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
