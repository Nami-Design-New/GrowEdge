import ActiveInternshipCard from "./ActiveInternshipCard";
import EmptyCard from "./EmptyCard";

export default function ActiveSessions() {
  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      status: "active",
      type: "Remote",
      location: "San Francisco, CA",
      duration: "3 months",
      salary: "$1500/month",
      deadline: "4/15/2024",
      description:
        "Join our fast-growing fintech startup and work on cutting-edge web applications using React, TypeScript, and modern development practices.",
      applications: 45,
      views: 234,
      hired: 0,
    },
    // ممكن تضيفي internships تانية هنا
  ];

  const hasData = internships && internships.length > 0;

  return (
    <div className="active-sessions">
      {hasData ? (
        internships.map((internship) => (
          <ActiveInternshipCard key={internship.id} internship={internship} />
        ))
      ) : (
        <EmptyCard
          icon="fas fa-briefcase"
          title="No Active Internships"
          text="You don't have any Active internship postings"
          buttonText="Create First Internship"
          link="/create-internship"
        />
      )}
    </div>
  );
}
