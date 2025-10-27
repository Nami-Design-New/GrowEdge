import { useState } from "react";
import SessionItem from "../../../ui/cards/SessionItemCard";

export default function UpcomingSessions() {
  const allSessions = [
    {
      name: "Sarah Chen",
      topic: "Career Strategy",
      time: "Today, 2:00 PM",
      duration: "60 min",
      status: "confirmed",
    },
    {
      name: "Michael Rodriguez",
      topic: "Interview Prep",
      time: "Today, 4:30 PM",
      duration: "45 min",
      status: "confirmed",
    },
    {
      name: "Emily Johnson",
      topic: "Resume Review",
      time: "Tomorrow, 10:00 AM",
      duration: "30 min",
      status: "pending",
    },
    {
      name: "Daniel Lee",
      topic: "Leadership Coaching",
      time: "Tomorrow, 3:00 PM",
      duration: "60 min",
      status: "confirmed",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  // لو مش عايزة كلهم يظهروا، خدي أول اتنين بس
  const sessionsToShow = showAll ? allSessions : allSessions.slice(0, 2);

  return (
    <div className="col-lg-8">
      <div className="sessions-card card-box">
        <div className="header">
          <i className="fa-regular fa-calendar-days"></i>
          <div>
            <h6>Upcoming Sessions</h6>
            <p>Your scheduled coaching sessions for today and tomorrow</p>
          </div>
        </div>

        <div className="session-list">
          {sessionsToShow.map((session, i) => (
            <SessionItem key={i} session={session} />
          ))}
        </div>

        <div className="footer">
          <button
            className="view-all"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Sessions"}
          </button>
        </div>
      </div>
    </div>
  );
}
