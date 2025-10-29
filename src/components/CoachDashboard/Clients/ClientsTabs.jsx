export default function ClientsTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "all", label: "All Clients", count: 4 },
    { id: "active", label: "Active", count: 3 },
    { id: "progress", label: "Progress Tracking" },
  ];

  return (
    <div className="tabs-common">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span>{tab.label}</span>
          {tab.count && <span className="count">({tab.count})</span>}
        </button>
      ))}
    </div>
  );
}
