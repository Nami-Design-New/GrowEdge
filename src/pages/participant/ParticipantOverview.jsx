import { useState } from "react";
import Sidebar from "../../components/Dashboard/ParticipantSidebar";
import WelcomeCard from "../../ui/cards/WelcomeCard";
import StatsCards from "../../components/Dashboard/Overview/StatsCards";
import EmptyStateCard from "../../ui/cards/EmptyStateCard";

export default function ParticipantOverview() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const participantStats = [
    {
      icon: "fa-regular fa-calendar-days",
      title: "Upcoming Sessions",
      value: 0,
      color: "#6c63ff",
    },
    {
      icon: "fa-solid fa-briefcase",
      title: "Active Applications",
      value: 0,
      color: "#28a745",
    },
    {
      icon: "fa-solid fa-lightbulb",
      title: "MVP Proposals",
      value: 0,
      color: "#ffc107",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Completed Sessions",
      value: 0,
      color: "#17a2b8",
    },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content p-0 p-md-4">
        <div className="overview-header">
          <h5>Overview</h5>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <WelcomeCard
          name="Ahmed"
          message="Here's what's happening with your career journey today."
        />

        <StatsCards stats={participantStats} />

        <EmptyStateCard
          title="Upcoming Sessions"
          subtitle="Your next coaching appointments"
          icon="fa-regular fa-calendar-days"
          hasData={false}
          buttonText="Book a Session"
          link="/career-coaching"
        />

        <EmptyStateCard
          title="Recent Applications"
          subtitle="Your latest internship applications"
          icon="fa-solid fa-briefcase"
          hasData={false}
          emptyText="No applications yet"
          buttonText="Browse Internships"
          link="/startup-internships"
        />
      </div>
    </div>
  );
}
