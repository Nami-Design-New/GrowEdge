export default function ClientInfoCard({ client }) {
  return (
    <div className="card-box client-info-card">
      <h5>
Client Information      
      </h5>

      <div className="contact-info small text-secondary mb-3">
        <div className="info-row">
          <p>
            <i className="fa-regular fa-envelope"></i>
            {client.email}
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            {client.phone}
          </p>
        </div>
        <div className="info-row">
          <p>
            <i className="fa-solid fa-location-dot"></i>
            {client.location}
          </p>
          <p>
            <i className="fa-regular fa-calendar"></i>
            Joined on: <strong>{client.joinedDate}</strong>
          </p>
        </div>
      </div>

      <h6 className="fw-bold mb-2">Coaching Goal</h6>
      <div className="d-flex align-items-center gap-2 mb-2">
        <span className="badge-goal">{client.goal}</span>
        <span className={`status-badge ${client.status.toLowerCase()}`}>
          {client.status}
        </span>
      </div>

      <p>{client.goalDescription}</p>

      <div className="progress">
        <div
          className="progress-bar"
          style={{ "--progress": `${client.progress}%` }}
        ></div>
      </div>
      <p className="small text-muted mt-2">
        Progress: {client.progress}%
      </p>
    </div>
  );
}
