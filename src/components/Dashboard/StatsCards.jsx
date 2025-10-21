
export default function StatsCards() {
  const stats = [
    {
      icon: "fa-regular fa-calendar-days",
      title: "Upcoming Sessions",
      value: 0,
      color: "#6c63ff",
    },
    {
      icon: "fa-solid fa-briefcase",
      title: "Active Applications",
      value: 0,
      color: "#28a745",
    },
    {
      icon: "fa-solid fa-lightbulb",
      title: "MVP Proposals",
      value: 0,
      color: "#ffc107",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Completed Sessions",
      value: 0,
      color: "#17a2b8",
    },
  ];

  return (
    <div className="row statistics-section">
      {stats.map((item, i) => (
        <div className="col-lg-3 col-md-6 col-sm-6 mb-3" key={i}>
          <div className="stat-card">
            <div className="stat-info">
              <h4>{item.title}</h4>
              <p>{item.value}</p>
            </div>
              <div className="icon-circle" style={{ backgroundColor: `${item.color}20` }}>
              <i className={item.icon} style={{ color: item.color }}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

