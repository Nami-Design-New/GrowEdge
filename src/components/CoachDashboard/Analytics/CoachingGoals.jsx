export default function CoachingGoals() {
  const goals = [
    {
      icon: "fa-solid fa-dollar-sign",
      title: "Monthly Revenue Goal",
      progressText: "$4,800 / $6,000",
      percent: 80,
      color: "#6c63ff",
    },
    {
      icon: "fa-solid fa-users",
      title: "Active Clients Goal",
      progressText: "12 / 15 clients",
      percent: 80,
      color: "#28a745",
    },
    {
      icon: "fa-solid fa-star",
      title: "Rating Goal",
      progressText: "4.8 / 4.9 average",
      percent: 98,
      color: "#ffc107",
    },
  ];

  return (
    <div className="coaching-goals mt-4">
      <h6 className="fw-bold mb-1">Coaching Goals</h6>
      <p className="text-muted small mb-3">
        Track progress toward your coaching objectives
      </p>

      <div className="goals-list">
        {goals.map((goal, i) => (
          <div
            className="goal-item mb-3"
            key={i}
            style={{ backgroundColor: `${goal.color}15` }}
          >
            <div className="d-flex align-items-center justify-content-between mb-2 flex-wrap">
              <div className="d-flex align-items-center gap-2">
                <div
                  className="goal-icon"
                  style={{
                    backgroundColor: `${goal.color}25`,
                    color: goal.color,
                  }}
                >
                  <i className={goal.icon}></i>
                </div>
                <h6 className="mb-0">{goal.title}</h6>
              </div>
              <span className="text-muted small">{goal.progressText}</span>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <div className="progress flex-grow-1 me-2">
                <div
                  className="progress-bar"
                  style={{
                    width: `${goal.percent}%`,
                    // backgroundColor: goal.color,
                  }}
                ></div>
              </div>
              <span className="percent-text">{goal.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
