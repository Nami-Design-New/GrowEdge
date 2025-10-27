export default function SettingsTabs({ activeTab, setActiveTab }) {
  const tabs = ["Profile", "Privacy", "Notifications", "Account"];

  return (
    <div className="tabs-common mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-btn pb-2 ${
            activeTab === tab
              ? "active border-bottom border-dark fw-semibold"
              : "text-muted"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
