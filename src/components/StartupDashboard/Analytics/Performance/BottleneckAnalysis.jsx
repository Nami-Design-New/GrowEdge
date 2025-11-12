export default function BottleneckAnalysis() {
  const stages = [
    {
      name: "Initial Screening",
      avgTime: 2.1,
      status: "Within target",
    },
    {
      name: "Technical Interview",
      avgTime: 8.5,
      status: "Above target",
      target: 6,
    },
    {
      name: "Final Decision",
      avgTime: 3.2,
      status: "Within target",
    },
  ];

  return (
    <div className="card-box bottleneck-analysis-card">
      <h6>Bottleneck Analysis</h6>
      <p>Identify stages causing delays</p>

      <div className="stages-wrapper">
        {stages.map((stage, i) => (
          <div key={i} className="stage-card">
            <h6>{stage.name}</h6>
            <p className="avg-time">{stage.avgTime} days</p>
            <span
              className={`status-badge ${
                stage.status === "Within target" ? "within" : "above"
              }`}
            >
              {stage.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
