import { useState } from "react";
import Sidebar from "../../components/StartupDashboard/StartupSidebar";
import SettingsTabs from "../../components/StartupDashboard/Settings/SettingsTabs";
import PrivacySettings from "../../components/StartupDashboard/profile/Preferences";
import BasicInfoForm from "../../components/StartupDashboard/profile/BasicInfoForm";
import NotificationPreferences from "../../components/StartupDashboard/Settings/NotificationPreferences";
import AccountSettings from "../../components/StartupDashboard/Settings/AccountSettings";

export default function StartupSettings() {
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
