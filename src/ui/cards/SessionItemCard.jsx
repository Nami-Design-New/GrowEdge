export default function SessionItem({ session }) {
  return (
    <div className="session-item-card">
      <div className="avatar">
        {session.name
          .split(" ")
          .map((w) => w[0])
          .join("")}
      </div>

      <div className="details">
        <h6>{session.name}</h6>
        <small>{session.topic}</small>
      </div>

      <div className="time-info">
        <span className="time">{session.time}</span>
        <span className="duration">{session.duration}</span>
                <span className={`status ${session.status}`}>{session.status}</span>

      </div>

      <div className="actions">
        <button className="join-btn">
          <i className="fa-solid fa-video"></i> Join
        </button>
      </div>
    </div>
  );
}
