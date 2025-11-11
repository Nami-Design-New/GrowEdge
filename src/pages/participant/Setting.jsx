import { useState } from "react";
import Sidebar from "../../components/Dashboard/ParticipantSidebar";
import SettingsTabs from "../../components/Dashboard/Settings/SettingsTabs";
import PrivacySettings from "../../components/Dashboard/profile/Preferences";
import BasicInfoForm from "../../components/Dashboard/profile/BasicInfoForm";
import NotificationPreferences from "../../components/Dashboard/Settings/NotificationPreferences";
import AccountSettings from "../../components/Dashboard/Settings/AccountSettings";

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Privacy");

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
        <div className="overview-header">
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
