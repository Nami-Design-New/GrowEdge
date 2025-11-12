import InterviewCard from "./InterviewCard";

const interviews = [
  {
    name: "Sarah Chen",
    position: "Frontend Developer Intern",
    date: "2024-03-22",
    time: "2:00 PM - 3:00 PM",
  },
  {
    name: "David Martinez",
    position: "Data Science Intern",
    date: "2024-03-25",
    time: "2:00 PM - 3:00 PM",
  },
];

export default function Interviews() {
  return (
    <div className="interviews-page">
      <h5 className="page-title">Upcoming Interviews</h5>

      <div className="interview-list">
        {interviews.map((interview, index) => (
          <InterviewCard key={index} data={interview} />
        ))}
      </div>
    </div>
  );
}
