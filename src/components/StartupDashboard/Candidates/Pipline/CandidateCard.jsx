export default function CandidateCard({ candidate }) {
  return (
<div className="candidate-card">
  <div className="candidate-header">
    <div className="avatar">
      {candidate.initials}
    </div>
    <div>
      <h6>{candidate.name}</h6>
      <small>{candidate.university}</small>
    </div>
  </div>

  <div className="candidate-info">
    <p className="mb-1">
      <strong>Position:</strong>
      <span className="badge">{candidate.position}</span>
    </p>
    <p className="mb-1">
      <strong>Applied:</strong> {candidate.applied}
    </p>
    <p className="mb-0">
      <strong>Rating:</strong>
      <span className="text-warning">
        <i className="fa-solid fa-star"></i> {candidate.rating}
      </span>
    </p>
  </div>
</div>

  );
}
