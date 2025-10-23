export default function ProfileTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "basic", label: "Basic Info" },
    { id: "professional", label: "Professional" },
    { id: "role", label: "Role Details" },
    { id: "social", label: "Social Links" },
    { id: "preferences", label: "Preferences" },
  ];

  return (
<div className="tabs-common">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
