import { useState } from "react";
import Sidebar from "../../components/CoachDashboard/CoachSidebar";
import AnalyticsTabs from "../../components/CoachDashboard/Analytics/AnalyticsTabs";
import OverviewTab from "../../components/CoachDashboard/Analytics/OverviewTab";
import PaymentsTab from "../../components/CoachDashboard/Analytics/PaymentsTab";
import AnalyticsTab from "../../components/CoachDashboard/Analytics/AnalyticsTab";

export default function Analytics() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content p-0 p-md-4">
        {/* ===== Header ===== */}
        <div className="overview-header">
          <h5>Analytics</h5>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* ===== Subheader ===== */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5 className="mb-0">Earnings & Analytics</h5>
            <p className="text-muted small mb-0">
              Track your coaching performance and earnings
            </p>
          </div>
        </div>

        {/* ===== Tabs ===== */}
        <AnalyticsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* ===== Tab Content ===== */}
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "payments" && <PaymentsTab />}
        {activeTab === "analytics" && <AnalyticsTab />}
      </div>
    </div>
  );
}
