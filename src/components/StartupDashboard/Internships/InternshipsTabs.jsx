export default function InternshipsTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "Active", label: "Active" },
    { id: "Drafts", label: "Drafts" },
    { id: "Closed", label: "Closed" },
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
