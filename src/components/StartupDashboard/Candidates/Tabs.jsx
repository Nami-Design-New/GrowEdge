export default function Tabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "Pipeline", label: "Pipeline View"},
    { id: "Applications", label: "All Applications"},
    { id: "Interviews", label: "Interviews" },
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
