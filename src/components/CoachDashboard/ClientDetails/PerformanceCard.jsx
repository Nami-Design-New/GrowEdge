export default function PerformanceCard({ client }) {
  return (
    <div className="card-box">
      <h6 className="fw-bold mb-3">Performance</h6>
      <div className="performance">
        <div>
          <p className="small text-muted mb-1">Average Rating</p>
          <h5 className="fw-bold">
            <i className="fa-solid fa-star text-warning me-1"></i>
            {client.rating}
          </h5>
        </div>
        <div>
          <p className="small text-muted mb-1">Total Revenue</p>
          <h5 className="fw-bold">${client.revenue}</h5>
        </div>
        <div>
          <p className="small text-muted mb-1">Client Status</p>
          <span
            className={`status-badge ${client.status.toLowerCase()}`}
          >
            {client.status}
          </span>
        </div>
      </div>
    </div>
  );
}
