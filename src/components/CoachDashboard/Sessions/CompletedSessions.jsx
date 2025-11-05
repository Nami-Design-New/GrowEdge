
import CompletedSessionCard from "../../../ui/cards/CompletedSessionCard";

export default function CompletedSessions() {
  const completedSessions = [
    {
      id: 1,
      clientName: "Alex Thompson",
      status: "completed",
      topic: "Career Strategy",
      rating: 5,
      date: "2024-03-18",
      time: "3:00 PM",
      duration: "60min",
      price: "$150",
      notes:
        "Client showed great enthusiasm for transitioning to data science. Discussed required skills and created learning roadmap.",
      nextSteps: [
        "Complete Python fundamentals course",
        "Build portfolio with 2-3 projects",
        "Apply to junior data analyst roles",
      ],
      feedback:
        "Excellent session! Very clear guidance and actionable steps.",
    },
  ];

  return (
    <div className="completed-sessions mt-3">
      {completedSessions.map((session) => (
        <CompletedSessionCard key={session.id} {...session} />
      ))}
    </div>
  );
}
