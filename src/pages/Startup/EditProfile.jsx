import { useState } from "react";
import Sidebar from "../../components/StartupDashboard/StartupSidebar";
import ProfileTabs from "../../components/StartupDashboard/profile/ProfileTabs";
import BasicInfoForm from "../../components/StartupDashboard/profile/BasicInfoForm";
import ProfessionalInfoForm from "../../components/StartupDashboard/profile/ProfessionalInfo";
import Preferences from "../../components/StartupDashboard/profile/Preferences";

export default function EditStartupProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");
  const [avatar, setAvatar] = useState(null); 
  const [userName] = useState("Sarah Ahmed"); 

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result); 
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content p-0 p-md-4">
        {/* ===== Header ===== */}
        <div className="overview-header">
          <h5>Edit Profile</h5>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* ===== Profile Header ===== */}
        <div className="profile-header text-center mb-4">
          <div className="avatar-wrapper mx-auto position-relative">
            <div className="avatar">
              {avatar ? (
                <img src={avatar} alt="avatar" className="avatar-img" />
              ) : (
                userName.charAt(0).toUpperCase()
              )}
            </div>

            {/* ===== Upload Button ===== */}
            <button
              className="upload-btn"
              onClick={() => document.getElementById("avatarInput").click()}
            >
              <i className="fa-solid fa-camera"></i>
            </button>

            <input
              type="file"
              id="avatarInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>

          <h5 className="fw-semibold mb-0">{userName}</h5>
          <span className="text-muted small">Startup</span>
        </div>

        {/* ===== Tabs ===== */}
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* ===== Tab Content ===== */}
        <div className="tab-content mt-4">
          {activeTab === "basic" && <BasicInfoForm />}
          {activeTab === "professional" && <ProfessionalInfoForm/>}
         {activeTab === "preferences" && <Preferences/>}

        </div>
      </div>
    </div>
  );
}
