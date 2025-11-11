import { useState } from "react";

export default function ActiveInternships() {
  const allInternships = [
    {
      title: "Frontend Developer Intern",
      department: "Engineering",
      applications: 45,
      salary: "$2,500/month",
      posted: "2 weeks ago",
      status: "active",
    },
    {
      title: "Product Marketing Intern",
      department: "Marketing",
      applications: 32,
      salary: "$2,000/month",
      posted: "1 week ago",
      status: "active",
    },
    {
      title: "Data Science Intern",
      department: "Analytics",
      applications: 28,
      salary: "$3,000/month",
      posted: "3 days ago",
      status: "active",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const internshipsToShow = showAll ? allInternships : allInternships.slice(0, 2);

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
          {internshipsToShow.map((internship, i) => (
            <div key={i} className="internship-item">
              <div className="title">{internship.title}</div>
              <div className="department">{internship.department}</div>
              <div className="applications">{internship.applications} applications</div>
              <div className="salary">{internship.salary}</div>
              <div className="posted">{internship.posted}</div>
              <div className={`status ${internship.status}`}>{internship.status}</div>
              <button className="manage-btn">Manage</button>
            </div>
          ))}
        </div>

        <div className="footer">
          <button
            className="view-all"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Internships"}
          </button>
        </div>
      </div>
    </div>
  );
}
