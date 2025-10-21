import { useState } from "react";
import Sidebar from "../../ui/layout/Sidebar";
import SessionEmptyCard from "../../ui/cards/SessionEmptyCard";

export default function Coaching() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");

  const renderTabContent = () => {
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
  };

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content p-0 p-md-4">
        <div className="overview-header ">
          <h5>Coaching</h5>

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
        <div className="tabs-container mt-4">
          <button
            className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming (0)
          </button>
          <button
            className={`tab-btn ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            Completed (0)
          </button>
          <button
            className={`tab-btn ${activeTab === "cancelled" ? "active" : ""}`}
            onClick={() => setActiveTab("cancelled")}
          >
            Cancelled (0)
          </button>
        </div>

        {/* Card Section */}
        <div className="mt-4">{renderTabContent()}</div>
      </div>
    </div>
  );
}
