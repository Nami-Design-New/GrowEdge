export default function TimeToHire() {
  const positions = [
    { title: "Frontend Developer", days: 16, trend: "down" },
    { title: "Data Science", days: 22, trend: "up" },
    { title: "Product Design", days: 18, trend: "stable" },
    { title: "Marketing", days: 12, trend: "down" },
  ];

  return (
    <div className="time-to-hire">
      <h6 className="title">Time to Hire by Position</h6>
      <p className="subtitle">Average days from application to hire</p>

      <div className="position-list">
        {positions.map((pos, i) => (
          <div key={i} className="position-item">
            <div className="info">
              <h6>{pos.title}</h6>
              <p>{pos.days} days average</p>
            </div>

            <div className={`trend ${pos.trend}`}>
              {pos.trend === "up" && (
                <>
                  <i className="fa-solid fa-arrow-up"></i> Up
                </>
              )}
              {pos.trend === "down" && (
                <>
                  <i className="fa-solid fa-arrow-down"></i> Down
                </>
              )}
              {pos.trend === "stable" && "Stable"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
