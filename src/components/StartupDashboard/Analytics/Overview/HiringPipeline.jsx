export default function HiringPipeline() {
  const pipelineData = [
    {
      stage: "Applied",
      candidates: 120,
      percent: 100,
    },
    {
      stage: "Screening",
      candidates: 85,
      percent: 70,
    },
    {
      stage: "Interview",
      candidates: 45,
      percent: 37,
    },
    {
      stage: "Final",
      candidates: 18,
      percent: 15,
    },
    {
      stage: "Offer",
      candidates: 8,
      percent: 6,
    },
    {
      stage: "Hired",
      candidates: 6,
      percent: 5,
    },
  ];

  return (
    <div className="earnings-card mt-4 ">
      <h6 className="fw-bold mb-1">Hiring Pipeline</h6>
      <p className="text-muted small mb-3">
        Current month pipeline breakdown
      </p>

      <div className="session-types">
        {pipelineData.map((item, index) => (
          <div className="session-item mb-3" key={index}>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <h6 className="mb-0">{item.stage}</h6>
              <span className="text-muted small">
                {item.candidates} candidates
              </span>
            </div>

            <div className="progress-container">
              <div className="progress">
                  <div
                  className="progress-bar"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
              <span className="percent-text">{item.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
