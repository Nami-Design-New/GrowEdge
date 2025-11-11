import { useState } from "react";

const recentApplications = [
  { initials: "AC", name: "Alex Chen", university: "MIT", rating: 4.8, status: "new", time: "2 hours ago" },
  { initials: "SM", name: "Sarah Martinez", university: "Stanford", rating: 4.6, status: "reviewed", time: "5 hours ago" },
  { initials: "DK", name: "David Kim", university: "UC Berkeley", rating: 4.9, status: "interview", time: "1 day ago" },
  { initials: "EJ", name: "Emma Johnson", university: "Harvard", rating: 4.7, status: "new", time: "2 days ago" },
];

export default function RecentApplications() {
  const [showAll, setShowAll] = useState(false);

  // نعرض أول 3 عناصر بشكل افتراضي، لو showAll = true نعرض كل العناصر
  const applicationsToShow = showAll ? recentApplications : recentApplications.slice(0, 3);

  return (
    <div className="recent-applications card-box col-lg-6">
      {/* Header */}
      <div className="header">
        <h6>
          Recent Applications <span className="new-count">23 new</span>
        </h6>
        <p className="sub-title">Latest candidates who applied for your internships</p>
      </div>

      {/* Applicants List */}
      <div className="applications-list">
        {applicationsToShow.map((app, i) => (
          <div key={i} className="application-item">
            <div className="avatar">{app.initials}</div>
            <div className="info">
              <span className="name">{app.name}</span>
              <span className="university">{app.university}</span>
            </div>
            <div className="rating-status">
              <span className="rating">{app.rating}</span>
              <span className={`status-badge ${app.status}`}>{app.status}</span>
              <span className="time">{app.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="footer">
        <button className="view-all-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "View All Applications"}
        </button>
      </div>
    </div>
  );
}
