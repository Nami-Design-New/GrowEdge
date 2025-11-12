
import { useState } from "react";
import Sidebar from "../../components/StartupDashboard/StartupSidebar";
import Tabs from "../../components/StartupDashboard/Analytics/Tabs";
import Overview from "../../components/StartupDashboard/Analytics/Overview/Overview";
import Recruitment from "../../components/StartupDashboard/Analytics/Recruitment/Recruitment";
import Performance from "../../components/StartupDashboard/Analytics/Performance/Performance";

export default function StartupAnalytics() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="dashboard-layout">
      {/* ===== Sidebar ===== */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-content p-0 p-md-4">
        {/* ===== Header ===== */}
        <div className="overview-header">
          <h5 className="mb-0">Analytics</h5>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* ===== Subheader with Button ===== */}
        <div className="sub-header">
          <div className="info">
            <h5 className="mb-0">Analytics & Reports</h5>
            <p className="text-muted small mb-0">
             Track your hiring performance and candidate metrics
            </p>
          </div>

        </div>

 <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="tab-content mt-4">
                    {activeTab === "Overview" && <Overview/>}
                    {activeTab === "Recruitment" && <Recruitment />}
                    {activeTab === "Performance" && <Performance />}
                </div>
       
      </div>
    </div>
  );
}
