import { useNavigate } from "react-router";

export default function ClientCard({ client }) {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/coach-dashboard/clients/${client.name.replace(/\s+/g, "-").toLowerCase()}`);
  };

  return (
    <div className="client-card">
      <div className="client-header">
        <div className="left-header">
          <div className="avatar">
            {client.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div className="info">
            <h6>{client.name}</h6>
            <p>{client.role}</p>
          </div>
        </div>

        <button className="view-btn" onClick={handleViewClick}>
          View
        </button>
      </div>

      <div className="right-header">
        <span className={`status ${client.status.toLowerCase()}`}>
          {client.status}
        </span>
        <span className="badge">{client.careerGoal}</span>
      </div>

      <div className="progress-section">
        <div className="progress-info">
          <span>Progress</span>
          <span>{client.progress}%</span>
        </div>
        <div className="progress-bar">
          <div className="fill" style={{ width: `${client.progress}%` }}></div>
        </div>

        <div className="stats">
          <div>
            <strong>{client.sessions}</strong>
            <span>Sessions</span>
          </div>
          <div className="rating">
            <strong>
              <i className="fa-solid fa-star"></i> {client.rating}
            </strong>
            <span>Rating</span>
          </div>
          <div>
            <strong>${client.revenue}</strong>
            <span>Revenue</span>
          </div>
        </div>
      </div>

      <div className="client-footer">
        <div className="next-session">
          <span>Next Session</span>
          <p>{client.nextSession}</p>
        </div>
        <div className="actions">
          <button className="schedule-btn">
            <i className="fa-regular fa-calendar-days"></i> Schedule
          </button>
          <button className="message-btn">
            <i className="fa-regular fa-message"></i> Message
          </button>
        </div>
      </div>
    </div>
  );
}
