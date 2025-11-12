export default function RecruitmentGoals() {
  const goals = [
    {
      title: "Monthly Hire Goal",
      value: 6,
      target: 8,
      unit: "hires",
      progress: 75,
      iconClass: "fa-solid fa-calendar-days",
      styleClass: "monthly-hire",
    },
    {
      title: "Time to Hire Goal",
      value: 18,
      target: 15,
      unit: "days",
      progress: 83,
      iconClass: "fa-solid fa-clock",
      styleClass: "time-to-hire",
    },
    {
      title: "Quality Score Goal",
      value: 4.1,
      target: 4.5,
      unit: "rating",
      progress: 91,
      iconClass: "fa-solid fa-star",
      styleClass: "quality-score",
    },
  ];

  return (
    <div className="card-box recruitment-goals-card">
          <h6>Recruitment Goals</h6>
      <p>Track progress toward your hiring objectives</p>

      <div className="goals-wrapper">
        {goals.map((goal, i) => (
          <div key={i} className={`goal-card ${goal.styleClass}`}>
            <div className="goal-header">
              <i className={goal.iconClass}></i>
              <h6>{goal.title}</h6>
            </div>
            <div className="goal-info">
              <strong>
                {goal.value} / {goal.target} {goal.unit}
              </strong>
              <span>{goal.progress}%</span>
            </div>
            <div className="progress-bar">
              <div className="fill" style={{ width: `${goal.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
