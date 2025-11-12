// pages/StartupDashboard/PipelineView.jsx
import StageColumn from "./StageColumn";

export default function PipelineView() {
  const stages = [
    {
      title: "Applied",
      description: "New applications received",
      candidates: [],
    },
    {
      title: "Screening",
      description: "Initial review and screening",
      candidates: [
        {
          initials: "EJ",
          name: "Emma Johnson",
          university: "University of Washington",
          position: "Product",
          applied: "3/10/2024",
          rating: 4.2,
        },
      ],
    },
    {
      title: "Interview",
      description: "Phone/video interviews",
      candidates: [
        {
          initials: "SC",
          name: "Sarah Chen",
          university: "Stanford University",
          position: "Frontend",
          applied: "3/15/2024",
          rating: 4.5,
        },
      ],
    },
    {
      title: "Final Round",
      description: "Final interviews and assessments",
      candidates: [
        {
          initials: "DM",
          name: "David Martinez",
          university: "University of Texas at Austin",
          position: "Data",
          applied: "3/12/2024",
          rating: 4.8,
        },
      ],
    },
    {
      title: "Offer",
      description: "Ready to extend offer",
      candidates: [
        {
          initials: "AT",
          name: "Alex Thompson",
          university: "MIT",
          position: "Frontend",
          applied: "3/8/2024",
          rating: 4.9,
        },
      ],
    },
  ];

  return (
    <div className="pipeline-view ">
      <div className="row gx-3 gy-1">
        {stages.map((stage, i) => (
          <StageColumn key={i} stage={stage} />
        ))}
      </div>
    </div>
  );
}
