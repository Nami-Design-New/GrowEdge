import { useNavigate } from "react-router";

export default function InternshipDetails() {
  const navigate = useNavigate();

  const internship = {
    title: "Frontend Developer Intern",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Remote",
    duration: "3 months",
    salary: "$1,500",
    status: "Active",
    description:
      "Join our fast-growing fintech startup and work on cutting-edge web applications using React, TypeScript, and modern development practices.",
    responsibilities: [
      "Develop and maintain React-based web applications",
      "Collaborate with design team to implement UI/UX designs",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and team meetings",
    ],
    requirements: [
      "Currently pursuing a degree in Computer Science or related field",
      "Strong foundation in JavaScript, HTML, and CSS",
      "Experience with React or similar modern frameworks",
      "Familiarity with Git and version control",
    ],
    skills: ["React", "TypeScript", "JavaScript", "CSS", "Git", "Node.js"],
    stats: {
      applications: 45,
      views: 234,
      hired: 0,
    },
    benefits: [
      "Competitive stipend",
      "Mentorship from senior developers",
      "Remote work flexibility",
      "Real project experience",
      "Potential for full-time offer",
    ],
  };

  return (
//     <div className="internship-details container">
//       {/* ===== Header ===== */}
//       <div className="details-header d-flex justify-content-between align-items-center mb-4">
//         <div>
//           <h5>{internship.title}</h5>
//           <span className="text-muted">
//             {internship.department} • {internship.location}
//           </span>
//         </div>
//         <div className="header-actions">
//           <button className="btn btn-link text-decoration-none me-3" onClick={() => navigate(-1)}>
//             <i className="fa-solid fa-arrow-left me-2"></i> Back to Internships
//           </button>
        
//         </div>
//       </div>

//       {/* ===== Cards Grid ===== */}
//       <div className="row g-4">
//         {/* Position Overview */}
//         <div className="col-lg-6 col-md-12">
//           <div className="card-box">
//             <h6>Position Overview</h6>
//             <div className="details d-flex flex-wrap gap-3 mt-2">
//               <span>
//                 <i className="fa-regular fa-clock"></i> {internship.duration}
//               </span>
//               <span>
//                 <i className="fa-regular fa-location-dot"></i> {internship.location}
//               </span>
//               <span>
//                 <i className="fa-regular fa-globe"></i> {internship.type}
//               </span>
//               <span>
//                 <i className="fa-regular fa-dollar-sign"></i> {internship.salary}
//               </span>
//               <span className={`status-badge ${internship.status.toLowerCase()}`}>
//                 {internship.status}
//               </span>
//             </div>
//             <p className="mt-2">{internship.description}</p>
//           </div>
//         </div>

//         {/* Performance Metrics */}
//         <div className="col-lg-6 col-md-12">
//   <div className="card-box">
//     <h6>Performance Metrics</h6>
//     <div className="metrics d-flex flex-column gap-2 mt-3">
//       <div className="metric-card applications">
//         <strong>{internship.stats.applications}</strong>
//         <span>Applications</span>
//       </div>
//       <div className="metric-card views">
//         <strong>{internship.stats.views}</strong>
//         <span>Profile Views</span>
//       </div>
//       <div className="metric-card hired">
//         <strong>{internship.stats.hired}</strong>
//         <span>Hired</span>
//       </div>
//     </div>
//   </div>
// </div>
   

//         {/* Key Responsibilities */}
//         <div className="col-lg-6 col-md-12">
//           <div className="card-box">
//             <h6>Key Responsibilities</h6>
//             <ul>
//               {internship.responsibilities.map((item, idx) => (
//                 <li key={idx}>
//                   <i className="fa-solid fa-check me-2 text-success"></i>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Requirements */}
//         <div className="col-lg-6 col-md-12">
//           <div className="card-box">
//             <h6>Requirements</h6>
//             <ul>
//               {internship.requirements.map((item, idx) => (
//                 <li key={idx}>
//                   <i className="fa-solid fa-circle-dot me-2 text-primary"></i>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Skills */}
//         <div className="col-lg-6 col-md-12">
//           <div className="card-box">
//             <h6>Required Skills</h6>
//             <div className="d-flex flex-wrap gap-2">
//               {internship.skills.map((skill, idx) => (
//                 <span key={idx} className="skill-badge">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Benefits */}
//         <div className="col-lg-6 col-md-12">
//           <div className="card-box">
//             <h6>Benefits Package</h6>
//             <ul>
//               {internship.benefits.map((benefit, idx) => (
//                 <li key={idx}>
//                   <i className="fa-solid fa-circle-check me-2 text-success"></i>
//                   {benefit}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>

    <div className="internship-details container">
  {/* Header */}
  <div className="details-header">
    <div>
      <h5>{internship.title}</h5>
      <span className="text-muted">{internship.department} • {internship.location}</span>
    </div>
    <div className="header-actions">
      <button onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left me-2"></i> Back to Internships
      </button>
    </div>
  </div>

  {/* Grid */}
  <div className="row g-4">
    {/* Overview */}
    <div className="col-lg-6 col-md-12">
      <div className="card-box">
        <h6>Position Overview</h6>
        <div className="details">
          <span><i className="fa-regular fa-clock"></i> {internship.duration}</span>
          <span><i className="fa-regular fa-location-dot"></i> {internship.location}</span>
          <span><i className="fa-regular fa-globe"></i> {internship.type}</span>
          <span><i className="fa-regular fa-dollar-sign"></i> {internship.salary}</span>
          <span className={`status-badge ${internship.status.toLowerCase()}`}>{internship.status}</span>
        </div>
        <p>{internship.description}</p>
      </div>
    </div>

    {/* Metrics */}
    <div className="col-lg-6 col-md-12">
      <div className="card-box">
        <h6>Performance Metrics</h6>
        <div className="metrics">
          <div className="metric-card applications">
            <strong>{internship.stats.applications}</strong>
            <span>Applications</span>
          </div>
          <div className="metric-card views">
            <strong>{internship.stats.views}</strong>
            <span>Profile Views</span>
          </div>
          <div className="metric-card hired">
            <strong>{internship.stats.hired}</strong>
            <span>Hired</span>
          </div>
        </div>
      </div>
    </div>

    {/* Responsibilities */}
    <div className="col-lg-6 col-md-12">
      <div className="card-box">
        <h6>Key Responsibilities</h6>
        <ul>
          {internship.responsibilities.map((item, idx) => (
            <li key={idx}><i className="fa-solid fa-check "></i> {item}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Requirements */}
    <div className="col-lg-6 col-md-12">
      <div className="card-box">
        <h6>Requirements</h6>
        <ul>
          {internship.requirements.map((item, idx) => (
            <li key={idx}><i className="fa-solid fa-circle-dot "></i> {item}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Skills */}
    <div className="col-lg-6 col-md-12">
      <div className="card-box">
        <h6>Required Skills</h6>
        <div className="badges">{internship.skills.map((skill, idx) => <span key={idx} className="skill-badge">{skill}</span>)}</div>
      </div>
    </div>

    {/* Benefits */}
    <div className="col-lg-6 col-md-12">
      <div className="card-box">
        <h6>Benefits Package</h6>
        <ul>
          {internship.benefits.map((benefit, idx) => (
            <li key={idx}><i className="fa-solid fa-circle-check "></i> {benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

  );
}
