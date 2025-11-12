import CandidateCard from "./CandidateCard";

export default function StageColumn({ stage }) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
      <div className="stage-column">
        <h6>{stage.title}</h6>
        <p >{stage.description}</p>
        <span className="badge mb-3">
          {stage.candidates.length} candidates
        </span>

        {stage.candidates.map((c, index) => (
          <CandidateCard key={index} candidate={c} />
        ))}
      </div>
    </div>
  );
}
