import { useNavigate } from "react-router";

export default function NotificationCard({ data, empty = false }) {
  const navigate = useNavigate();

  if (empty) {
    return (
      <div className="notification-empty-card d-flex flex-column align-items-center justify-content-center text-center p-5">
        <i className="fa-regular fa-bell fa-3x mb-3 text-muted"></i>
        <h6 className="mb-1">No notifications</h6>
        <p className="text-muted mb-0">
          You are all caught up! New notifications will appear here.
        </p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="notification-card d-flex align-items-start justify-content-between p-3 mb-3 border rounded">
      <div className="d-flex align-items-start">
        <div className="icon-box me-3">
          <i className={`${data.icon} fa-lg`}></i>
        </div>

        <div className="content">
          <h6 className="title mb-1">{data.title}</h6>
          <p className="message mb-1">{data.message}</p>
          <small className="text-muted">
            From {data.sender} • {data.role}
          </small>

          {data.button && (
            <div className="mt-2">
              <button
                className="action-btn btn btn-light btn-sm"
                onClick={() => navigate(data.link)}
              >
                {data.button}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="right-section text-end">
        <span className="time d-block text-muted mb-2">{data.time}</span>
        {data.important && <i className="fa-solid fa-star text-warning"></i>}
      </div>
    </div>
  );
}
