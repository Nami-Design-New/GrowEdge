import { useState } from "react";
import Sidebar from "../../components/CoachDashboard/CoachSidebar";
import SettingsTabs from "../../components/CoachDashboard/Settings/SettingsTabs";
import PrivacySettings from "../../components/CoachDashboard/profile/Preferences";
import BasicInfoForm from "../../components/CoachDashboard/profile/BasicInfoForm";
import NotificationPreferences from "../../components/CoachDashboard/Settings/NotificationPreferences";
import AccountSettings from "../../components/CoachDashboard/Settings/AccountSettings";

export default function CoachSettings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile":
        return <BasicInfoForm />;
      case "Privacy":
        return <PrivacySettings />;
      case "Notifications":
        return <NotificationPreferences />;
      case "Appearance":
        return <PrivacySettings />;
      case "Account":
        return <AccountSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-content p-0 p-md-4">
        <div className="overview-header ">
          <h5 className="mb-0">Settings</h5>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Tabs */}
        <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dynamic Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
}
