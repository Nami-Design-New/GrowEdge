import { useState } from "react";
import Sidebar from "../../ui/layout/Sidebar";
import Tabs from "../../components/Dashboard/Notifications/Tabs";
import CategoryTabs from "../../components/Dashboard/Notifications/CategoryTabs";
import NotificationCard from "../../ui/cards/NotificationCard";

export default function Notifications() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Unread");
  const [activeCategory, setActiveCategory] = useState("All");

  const notifications = [
    {
      id: 1,
      title: "New message from Sarah Johnson",
      message:
        "Great progress on your resume! Let's schedule a mock interview for next week.",
      time: "15m ago",
      sender: "Sarah Johnson",
      role: "Career Coach",
      type: "message",
      unread: true,
      important: true,
      button: "Reply",
      icon: "fa-regular fa-message",
    },
    {
      id: 2,
      title: "Coaching session reminder",
      message:
        "Your career coaching session with Sarah Johnson starts in 30 minutes.",
      time: "30m ago",
      sender: "Sarah Johnson",
      role: "Career Coach",
      type: "session",
      unread: true,
      important: true,
      button: "Join Session",
      icon: "fa-regular fa-calendar",
    },
  ];

  const filtered = notifications.filter((n) => {
    if (activeTab === "Unread") return n.unread;
    if (activeTab === "Important") return n.important;
    return true;
  });

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content p-0 p-md-4">
        <div className="overview-header">
          <h5>
            Notifications{" "}
            <span className="count-badge">{filtered.length}</span>
          </h5>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Category Tabs */}
        <CategoryTabs
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Notification Cards */}
        <div className="notifications-list mt-3">
          {filtered.map((n) => (
            <NotificationCard key={n.id} data={n} />
          ))}
        </div>
      </div>
    </div>
  );
}
