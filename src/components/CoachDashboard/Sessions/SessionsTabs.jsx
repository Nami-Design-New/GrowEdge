export default function SessionsTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "Upcoming", label: "Upcoming Sessions" },
    { id: "Completed", label: "Completed Sessions" },
    { id: "Calendar", label: "Calendar View" },
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
