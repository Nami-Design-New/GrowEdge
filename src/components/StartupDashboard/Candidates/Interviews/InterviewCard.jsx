export default function InterviewCard({ data }) {
  const initials = data.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="interview-card">
      <div className="left">
        <div className="avatar">{initials}</div>
        <div className="info">
          <h6 className="name">{data.name}</h6>
          <p className="position">{data.position}</p>
        </div>
      </div>

      <div className="datetime">
        <p className="date">{data.date}</p>
        <p className="time">{data.time}</p>
      </div>

      <div className="actions">
        <button className="btn join-btn">
          <i className="fa-solid fa-video"></i> Join Call
        </button>
        <button className="btn review-btn">
          <i className="fa-regular fa-eye"></i> Review
        </button>
      </div>
    </div>
  );
}
