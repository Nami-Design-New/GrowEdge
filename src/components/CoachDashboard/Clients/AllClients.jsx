import { useState } from "react";
import Sidebar from "../CoachSidebar";
import SearchBar from "./SearchBar";
import ClientsTabs from "./ClientsTabs";
import ClientCard from "./ClientCard";
import ActiveClients from "./ActiveClients";
import ProgressClients from "./ProgressClients";

export default function Clients() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const clients = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager",
      status: "Active",
      careerGoal: "Career Transition",
      progress: 75,
      sessions: 8,
      rating: 4.8,
      revenue: 1200,
      nextSession: "2024-03-20 at 10:00 AM",
    },
    {
      name: "David Martinez",
      role: "Senior Developer",
      status: "Active",
      careerGoal: "Promotion",
      progress: 60,
      sessions: 6,
      rating: 4.9,
      revenue: 900,
      nextSession: "2024-03-20 at 2:00 PM",
    },
    {
      name: "Emma Johnson",
      role: "UX Designer",
      status: "Active",
      careerGoal: "Skill Development",
      progress: 90,
      sessions: 12,
      rating: 5,
      revenue: 1800,
      nextSession: "2024-03-21 at 11:00 AM",
    },
    {
      name: "Alex Thompson",
      role: "Data Analyst",
      status: "Completed",
      careerGoal: "Career Transition",
      progress: 100,
      sessions: 10,
      rating: 4.9,
      revenue: 1500,
      nextSession: "No upcoming session",
    },
  ];

  // فلترة العملاء بناءً على التاب المختار
  const filteredClients = clients.filter((client) => {
    if (activeTab === "all") return true;
    if (activeTab === "active") return client.status === "Active";
    if (activeTab === "progress") return client.progress < 100;
    return true;
  });

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content p-0 p-md-4">
        {/* Header */}
        <div className="overview-header">
          <h5>Clients</h5>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Page Title */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5 className="mb-0">Client Management</h5>
            <p className="text-muted small mb-0">
              Track and manage your coaching clients
            </p>
          </div>
        </div>

        {/* Search & Tabs */}
        <SearchBar />
        <ClientsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tabs Content */}
        <div className="mt-4">
          {activeTab === "active" ? (
            <ActiveClients clients={clients} />
          ) : activeTab === "progress" ? (
            <ProgressClients clients={clients} />
          ) : (
            <div className="row">
              {filteredClients.map((client, i) => (
                <div className="col-lg-6 mb-4" key={i}>
                  <ClientCard client={client} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
