// import React from "react";
import UpcomingSessionCard from "../../../ui/cards/UpcomingSessionCard";

export default function UpcomingSessions() {
  const sessions = [
    {
      id: 1,
      coachName: "Ahmed Ali",
      status: "Confirmed",
      type: "1-on-1",
      date: "2025-11-10",
      time: "10:00 AM",
      duration: "60 min",
      price: "$50",
      topic: "Strength Training",
    },
    {
      id: 2,
      coachName: "Sara Mohamed",
      status: "Pending",
      type: "Group",
      date: "2025-11-12",
      time: "04:00 PM",
      duration: "45 min",
      price: "$30",
      topic: "Nutrition Guidance",
    },
  ];

  return (
    <div className="upcoming-sessions">
      {sessions.length > 0 ? (
        <div className="session-list">
          {sessions.map((session) => (
            <UpcomingSessionCard
              key={session.id}
              coachName={session.coachName}
              status={session.status}
              type={session.type}
              date={session.date}
              time={session.time}
              duration={session.duration}
              price={session.price}
              topic={session.topic}
            />
          ))}
        </div>
      ) : (
        <p className="no-sessions">No upcoming sessions scheduled.</p>
      )}
    </div>
  );
}
