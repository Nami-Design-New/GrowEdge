export default function CandidateQuality() {
  const universities = [
    { name: "Stanford University", rating: 4.5, apps: 15 },
    { name: "MIT", rating: 4.7, apps: 12 },
    { name: "UC Berkeley", rating: 4.2, apps: 18 },
    { name: "University of Washington", rating: 4.1, apps: 10 },
    { name: "University of Texas", rating: 4.0, apps: 14 },
  ];

  return (
    <div className="candidate-quality">
      <h6 className="title">Candidate Quality by University</h6>
      <p className="subtitle">Average ratings and application volumes</p>

      <div className="university-list">
        {universities.map((u, i) => (
          <div key={i} className="university-item">
            <div className="header">
              <h6>{u.name}</h6>
              <span className="rating">
                <i className="fa-solid fa-star"></i> {u.rating}
                <span className="apps">({u.apps} apps)</span>
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="fill"
                style={{ width: `${(u.rating / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
