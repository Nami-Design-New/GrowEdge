import { useNavigate } from "react-router";

export default function BookedSessionCard({
  coachName,
  status,
  type,
  date,
  time,
  duration,
  price,
  topic,
}) {
  const navigate = useNavigate(); 

  return (
    <div className="booked-session-card mt-2">
      <div className="session-info">
        <div className="coach-avatar">
          <i className="fa-regular fa-user"></i>
        </div>

        <div className="details">
          <h6 className="coach-name">{coachName}</h6>

          <div className="tags">
            <span className="status">{status}</span>
            <span className="type">{type}</span>
          </div>

          <div className="meta">
            <span>
              <i className="fa-regular fa-calendar"></i> {date}
            </span>
            <span>
              <i className="fa-regular fa-clock"></i> {time} ({duration})
            </span>
            <span>
              <i className="fa-solid fa-dollar-sign"></i> {price}
            </span>
          </div>

          <p className="topic">{topic}</p>
        </div>
      </div>

      <div className="actions">
        <button
          className="btn view"
          onClick={() => navigate("/session-details")} 
        >
          <i className="fa-regular fa-eye"></i> View Details
        </button>

        <button className="btn join">
          <i className="fa-solid fa-video"></i> Join Session
        </button>

        <button className="btn reschedule">
          <i className="fa-solid fa-rotate-right"></i> Reschedule
        </button>

        <button className="btn cancel">
          <i className="fa-solid fa-xmark"></i> Cancel
        </button>
      </div>
    </div>
  );
}
