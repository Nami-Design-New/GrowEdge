import { useState } from "react";
import Sidebar from "../../ui/layout/Sidebar";
import WelcomeCard from "../../ui/cards/WelcomeCard";
import StatsCards from "../../components/Dashboard/StatsCards";
import EmptyStateCard from "../../ui/cards/EmptyStateCard";

export default function ParticipantOverview() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          name="Mariam"
          message="Here's what's happening with your career journey today."
        />
        <StatsCards />
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
