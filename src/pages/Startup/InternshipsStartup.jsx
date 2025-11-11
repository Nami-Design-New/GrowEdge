import { useState } from "react";
import Sidebar from "../../components/StartupDashboard/StartupSidebar";
import InternshipsTabs from "../../components/StartupDashboard/Internships/InternshipsTabs";
import ActiveSessions from "../../components/StartupDashboard/Internships/ActiveSessions";
import DraftSessions from "../../components/StartupDashboard/Internships/DraftSessions";
import ClosedSessions from "../../components/StartupDashboard/Internships/ClosedSessions";

export default function InternshipsStartup() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Active");

  return (
    <div className="dashboard-layout">
      {/* ===== Sidebar ===== */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content p-0 p-md-4">
        {/* ===== Header ===== */}
        <div className="overview-header">
          <h5 className="mb-0">Internships</h5>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* ===== Subheader with Button ===== */}
        <div className="internship-header">
          <div className="internship-info">
            <h5 className="mb-0">Startup Internships</h5>
            <p className="text-muted small mb-0">
              Discover exciting internship opportunities at innovative startups
            </p>
          </div>

          <button className="btn btn-dark">
            <i className="fa-solid fa-plus"></i> Create Internship
          </button>
        </div>

        <InternshipsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "Active" && <ActiveSessions />}
        {activeTab === "Drafts" && <DraftSessions />}
        {activeTab === "Closed" && <ClosedSessions />}
      </div>
    </div>
  );
}
