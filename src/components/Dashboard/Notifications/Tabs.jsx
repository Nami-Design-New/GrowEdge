export default function Tabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "All", label: "All", count: 6 },
    { id: "Unread", label: "Unread", count: 2 },
    { id: "Important", label: "Important", count: 2 },
  ];

  return (
    <div className="tabs d-flex gap-2 mt-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
          <span className="count">{tab.count}</span>
        </button>
      ))}
    </div>
  );
}
