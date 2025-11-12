export default function HiringTeamPerformance() {
  const team = [
    {
      initials: "JD",
      name: "John Doe",
      role: "Senior Recruiter",
      hires: 4,
      avgDays: 15,
    },
    {
      initials: "SM",
      name: "Sarah Miller",
      role: "Technical Recruiter",
      hires: 2,
      avgDays: 22,
    },
  ];

  return (
    <div className="card-box hiring-team-card">
      <h6>Hiring Team Performance</h6>
      <p>Individual recruiter metrics</p>

      <div className="team-wrapper">
        {team.map((member, i) => (
          <div key={i} className="member-card">
            <div className="avatar">{member.initials}</div>
            <div className="member-info">
              <h6>{member.name}</h6>
              <p>{member.role}</p>
            </div>
            <div className="member-metrics">
              <div className="metric">
                <strong>{member.hires}</strong>
                <span> hires</span>
              </div>
              <div className="metric">
                <strong>{member.avgDays}</strong>
                <span> days avg</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
