export default function ActiveInternships() {
  const allInternships = [
    {
      title: "Frontend Developer Intern",
      department: "Engineering",
      applications: 45,
      salary: "$2,500/month",
      posted: "2 weeks ago",
      status: "active",
      icon: "fa-regular fa-briefcase",
    },
    {
      title: "Product Marketing Intern",
      department: "Marketing",
      applications: 32,
      salary: "$2,000/month",
      posted: "1 week ago",
      status: "active",
      icon: "fa-regular fa-briefcase",
    },
    {
      title: "Data Science Intern",
      department: "Analytics",
      applications: 28,
      salary: "$3,000/month",
      posted: "3 days ago",
      status: "active",
      icon: "fa-regular fa-briefcase",
    },
  ];

  return (
    <div className="col-lg-8">
      <div className="internships-card card-box">
        <div className="header">
          <i className="fa-regular fa-briefcase"></i>
          <div>
            <h6>Active Internships</h6>
            <p>Currently posted internship opportunities</p>
          </div>
        </div>

        <div className="internship-list">
          {allInternships.map((internship, i) => (
            <div key={i} className="internship-item">
              {/* Info Section */}
              <div className="info-section">
                <div className="icon">
                  <i className={internship.icon}></i>
                </div>
                <div className="text">
                  <div className="title">{internship.title}</div>
                  <div className="department">{internship.department}</div>
                  <div className="salary">{internship.salary}</div>
                </div>
              </div>

              {/* Meta Section */}
              <div className="meta-section">
                  <div className={`status-badge ${internship.status}`}>
                    {internship.status}
                  </div>
                <div className="posted">{internship.posted}</div>
                 <div className="applications">{internship.applications} applications</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
