import EmptyCard from "./EmptyCard";
import DraftInternshipCard from "./DraftInternshipCard";

export default function DraftSessions() {
  const internships = [
    {
      title: "UI/UX Designer Intern",
      status: "draft",
      type: "Remote",
      location: "Cairo, Egypt",
      duration: "2 months",
      salary: "$800/month",
      deadline: "3/10/2024",
      description:
        "Work closely with our product team to design user interfaces and enhance the user experience for our web app.",
      applications: 12,
      views: 98,
      hired: 0,
    },
    {
      title: "Backend Developer Intern",
      status: "draft",
      type: "Hybrid",
      location: "San Francisco, CA",
      duration: "4 months",
      salary: "$1200/month",
      deadline: "4/05/2024",
      description:
        "Help us develop and optimize REST APIs, improve performance, and maintain scalable backend services.",
      applications: 23,
      views: 145,
      hired: 1,
    },
  ];

  const hasData = internships && internships.length > 0;

  return (
    <div className="draft-sessions">
      {hasData ? (
        internships.map((internship, index) => (
          <DraftInternshipCard key={index} internship={internship} />
        ))
      ) : (
        <EmptyCard
          icon="fa-regular fa-file-lines"
          title="No Draft Internships"
          text="You don't have any draft internship postings"
          buttonText="Create First Internship"
          link="/create-internship"
        />
      )}
    </div>
  );
}
