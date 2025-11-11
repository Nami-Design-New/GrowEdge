import EmptyCard from "./EmptyCard";
import ClosedInternshipCard from "./ClosedInternshipCard";

export default function ClosedSessions() {
  // 🧩 داتا تجريبية
  const internships = [
    {
      title: "Frontend Developer Intern",
      status: "closed",
      type: "Remote",
      location: "San Francisco, CA",
      duration: "3 months",
      salary: "$1500/month",
      deadline: "4/15/2024",
      description:
        "This internship has ended. The position was focused on building React and TypeScript web applications.",
      applications: 45,
      views: 234,
      hired: 3,
    },
    {
      title: "Marketing Intern",
      status: "closed",
      type: "Onsite",
      location: "Cairo, Egypt",
      duration: "2 months",
      salary: "$700/month",
      deadline: "2/28/2024",
      description:
        "This internship was focused on social media campaigns and content creation.",
      applications: 18,
      views: 120,
      hired: 1,
    },
  ];

  const hasData = internships && internships.length > 0;

  return (
    <div className="closed-sessions">
      {hasData ? (
        internships.map((internship, index) => (
          <ClosedInternshipCard key={index} internship={internship} />
        ))
      ) : (
        <EmptyCard
          icon="fa-regular fa-folder-closed"
          title="No Closed Internships"
          text="You don't have any closed internship postings"
          buttonText="Create Internship"
          link="/create-internship"
        />
      )}
    </div>
  );
}
