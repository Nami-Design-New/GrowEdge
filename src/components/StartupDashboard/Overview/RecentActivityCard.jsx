
export default function RecentActivityCard() {
  const activities = [
    { text: "Completed session with David Kim", time: "2 hours ago" },
    { text: "New client request from Lisa Wang", time: "4 hours ago" },
    { text: "Payment received: $150", time: "1 day ago" },
    { text: "New message from Alex Thompson", time: "2 days ago" },
  ];

  return (
    <div className="col-lg-4">
      <div className="recent-card card-box">
        <div className="header">
          <i className="fa-regular fa-bell"></i>
          <div>
            <h6>Recent Activity</h6>
            <p>Latest updates and notifications</p>
          </div>
        </div>

        <div className="activity-list">
          {activities.map((item, i) => (
            <div key={i} className="activity-item">
              <p>{item.text}</p>
              <small>{item.time}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
