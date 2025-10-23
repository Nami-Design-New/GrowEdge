export default function MvpCard({ idea, onEdit, onDelete }) {
  return (
    <div className="mvp-card p-4 mb-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5 className="idea-title mb-1">{idea.ideaTitle}</h5>
          <p className="founder text-muted mb-0">
            by {idea.firstName} {idea.lastName}
          </p>
        </div>
        <span className="funding-tag">{idea.fundingAmount}</span>
      </div>

      {/* Description */}
      <div className="idea-summary mb-3">
        <p className="text-muted mb-1">
          <strong>Problem:</strong> {idea.problem}
        </p>
        <p className="text-muted mb-1">
          <strong>Solution:</strong> {idea.solution}
        </p>
      </div>

      {/* Extra Info */}
      <div className="extra-info d-flex flex-wrap gap-3 small text-muted mb-3">
        <div>
          <i className="fa-solid fa-bullseye me-1 text-dark"></i>
          <strong>Market:</strong> {idea.targetMarket}
        </div>
        <div>
          <i className="fa-solid fa-users me-1 text-dark"></i>
          <strong>Team:</strong> {idea.teamSize}
        </div>
        <div>
          <i className="fa-solid fa-clock me-1 text-dark"></i>
          <strong>Timeline:</strong> {idea.timeline}
        </div>
      </div>

      {/* Footer */}
      <div className="text-end d-flex justify-content-end gap-2">
        <button className="btn-edit" onClick={() => onEdit(idea)}>
          <i className="fa-solid fa-pen me-1"></i> Edit
        </button>
        <button className="btn-delete" onClick={() => onDelete(idea)}>
          <i className="fa-solid fa-trash me-1"></i> Delete
        </button>
      </div>
    </div>
  );
}
