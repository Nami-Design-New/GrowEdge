export default function Tabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "Overview", label: "Overview"},
    { id: "Recruitment", label: "Recruitment"},
    { id: "Performance", label: "Performance" },
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
