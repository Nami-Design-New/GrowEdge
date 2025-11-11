export default function CurrentInternsCard() {
  const internsData = [
    { initials: "MR", name: "Michael Rodriguez", role: "Backend Developer Intern", performance: 95, mentor: "John Smith" },
    { initials: "LW", name: "Lisa Wang", role: "UX Design Intern", performance: 88, mentor: "Jane Doe" },
    { initials: "JW", name: "James Wilson", role: "Marketing Intern", performance: 92, mentor: "Sarah Johnson" },
  ];

  return (
    <div className="col-lg-6">
      <div className="current-interns-card card-box">
        {/* Header */}
        <div className="header">
          <i className="fa-solid fa-user-graduate"></i>
          <div>
            <h6>Current Interns</h6>
            <p>Performance overview of your active interns</p>
          </div>
        </div>

        {/* Interns List */}
        <div className="interns-list">
          {internsData.map((intern, i) => (
            <div key={i} className="intern-item">
              <div className="intern-info">
                <div className="avatar">{intern.initials}</div>
                <div className="details">
                  <span className="name">{intern.name}</span>
                  <span className="role">{intern.role}</span>
                  <span className="mentor">Mentor: {intern.mentor}</span>
                </div>
              </div>

              <div className="progress-wrapper">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${intern.performance}%` }}
                  ></div>
                </div>
                <span className="progress-text">{intern.performance}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
