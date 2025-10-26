export default function NotificationCard({ data }) {
  return (
    <div className="notification-card">
      <div className="icon-box">
        <i className={data.icon}></i>
      </div>
      <div className="content">
        <h6 className="title">{data.title}</h6>
        <p className="message">{data.message}</p>
        <span className="meta">
          From {data.sender} • {data.role}
        </span>
        {data.button && <button className="action-btn">{data.button}</button>}
      </div>
      <div className="right-section">
        <span className="time">{data.time}</span>
        <i className="fa-solid fa-star important"></i>
      </div>
    </div>
  );
}
