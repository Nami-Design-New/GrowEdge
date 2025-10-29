
export default function QuickActions() {
  const actions = [
    { icon: "fa-regular fa-calendar-plus", label: "Schedule Session" },
    { icon: "fa-regular fa-message", label: "View Messages" },
    { icon: "fa-solid fa-folder-plus", label: "Add Resources" },
    { icon: "fa-regular fa-clock", label: "Update Availability" },
  ];

  return (
      <div className="quick-actions card-box">
        <div className="header">
          <h6>Quick Actions</h6>
          <p>Common tasks you can perform quickly</p>
        </div>

        <div className="actions-list">
          {actions.map((act, i) => (
            <button className="action-btn" key={i}>
              <i className={act.icon}></i>
              <span>{act.label}</span>
            </button>
          ))}
        </div>
      </div>
  );
}
