export default function UpcomingTasks() {
  const tasks = [
    { text: "Interview: Alex Chen", time: "Today, 2:00 PM" },
    { text: "Intern evaluations due", time: "March 30, 2024" },
    { text: "Review 12 new applications", time: "Frontend Developer position" },
  ];

  return (
    <div className="col-lg-4">
      <div className="recent-card card-box">
        {/* Header */}
        <div className="header">
          <i className="fa-regular fa-bell"></i>
          <div>
            <h6>Upcoming Tasks</h6>
            <p>Important deadlines and action items</p>
          </div>
        </div>

        {/* Task List */}
        <div className="activity-list">
          {tasks.map((task, i) => (
            <div key={i} className="activity-item">
              <p>{task.text}</p>
              <small>{task.time}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
