export default function StatsCards({ stats = [] }) {
  if (!Array.isArray(stats) || stats.length === 0) {
    return (
      <div className="text-center p-4 text-muted">
        <i className="fa-regular fa-chart-bar fa-2x mb-2 d-block"></i>
        <p>No statistics available</p>
      </div>
    );
  }

  return (
    <div className="row statistics-section">
      {stats.map((item, i) => (
        <div className="col-lg-3 col-md-6 col-sm-6 mb-3" key={i}>
          <div className="stat-card">
            <div className="stat-info">
              <h5 className="title">{item.title}</h5>
              <h3 className="value">{item.value}</h3>
              {item.change && (
                <span
                  className={`change ${
                    item.change.toString().startsWith("+")
                      ? "text-success"
                      : "text-danger"
                  }`}
                >
                  {item.change}
                </span>
              )}
            </div>
            <div
              className="icon-circle"
              style={{ backgroundColor: `${item.color}20` }}
            >
              <i className={item.icon} style={{ color: item.color }}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
