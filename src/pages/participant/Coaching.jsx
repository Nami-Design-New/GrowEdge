import { useState } from "react";
import Sidebar from "../../components/Dashboard/ParticipantSidebar";
import SessionEmptyCard from "../../ui/cards/SessionEmptyCard";
import BookedSessionCard from "../../ui/cards/BookedSessionCard";

export default function Coaching() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");

  //  data for now
  const sessions = {
    upcoming: [
      {
        coachName: "Sarah Johnson",
        status: "scheduled",
        type: "Other",
        date: "10/22/2025",
        time: "11:00 AM",
        duration: "60min",
        price: "$150",
        topic: "Job Search Strategy",
      },
            {
        coachName: "Sarah Johnson",
        status: "scheduled",
        type: "Other",
        date: "10/22/2025",
        time: "11:00 AM",
        duration: "60min",
        price: "$150",
        topic: "Job Search Strategy",
      },
    ],
    completed: [],
    cancelled: [],
  };

  const renderTabContent = () => {
    const currentSessions = sessions[activeTab];

    if (currentSessions.length === 0) {
      switch (activeTab) {
        case "upcoming":
          return (
            <SessionEmptyCard
              icon="fa-regular fa-calendar"
              title="No Upcoming Sessions"
              subtitle="Book your first coaching session to get started"
              buttonText="Browse Coaches"
            />
          );
        case "completed":
          return (
            <SessionEmptyCard
              icon="fa-solid fa-check-circle"
              title="Your completed sessions will appear here"
              subtitle="You haven’t completed any sessions yet"
              buttonText="View Coaches"
            />
          );
        case "cancelled":
          return (
            <SessionEmptyCard
              icon="fa-solid fa-ban"
              title="No Cancelled Sessions"
              subtitle="Your cancelled sessions will appear here"
              buttonText="Book New Session"
            />
          );
        default:
          return null;
      }
    } else {
      return currentSessions.map((session, index) => (
        <BookedSessionCard key={index} {...session} />
      ));
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content p-0 p-md-4">
        <div className="overview-header ">
          <h5>Coaching</h5>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-0">My Coaching Sessions</h5>
            <p className="text-muted small mb-0">
              Manage your scheduled and completed coaching sessions
            </p>
          </div>
        </div>

        {/* Creative Tabs */}
        {/* <div className="tabs-container mt-4"> */}
        <div className="tabs-common mt-4">

          <button
            className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming ({sessions.upcoming.length})
          </button>
          <button
            className={`tab-btn ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            Completed ({sessions.completed.length})
          </button>
          <button
            className={`tab-btn ${activeTab === "cancelled" ? "active" : ""}`}
            onClick={() => setActiveTab("cancelled")}
          >
            Cancelled ({sessions.cancelled.length})
          </button>
        </div>

        {/* Card Section */}
        <div className="mt-4">{renderTabContent()}</div>
      </div>
    </div>
  );
}
