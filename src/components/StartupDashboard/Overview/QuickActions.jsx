
export default function QuickActions() {
const actions = [
  { icon: "fa-regular fa-calendar-plus", label: "Post New Internship" },
  { icon: "fa-regular fa-message", label: "Review Applications" },
  { icon: "fa-solid fa-folder-plus", label: "Schedule Interviews" },
  { icon: "fa-regular fa-clock", label: "View Analytics" },
];
  return (
    <div className="col-lg-4">
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
    </div>
  );
}
