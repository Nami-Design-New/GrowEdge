// import React from 'react'
import { useState } from "react";
import Sidebar from "../../components/CoachDashboard/CoachSidebar";
import SessionsTabs from "../../components/CoachDashboard/Sessions/SessionsTabs";
import UpcomingSessions from "../../components/CoachDashboard/Sessions/UpcomingSessions";
import CompletedSessions from "../../components/CoachDashboard/Sessions/CompletedSessions";
import CalendarView from "../../components/CoachDashboard/Sessions/CalendarView";
export default function Sessions() {
      const [sidebarOpen, setSidebarOpen] = useState(false);
      const [activeTab, setActiveTab] = useState("Upcoming");

  return (
   <div className="dashboard-layout">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
  
        <div className="main-content p-0 p-md-4">
           {/* ===== Header ===== */}
          <div className="overview-header">
            <h5>Sessions</h5>
            <button
              className="sidebar-toggle-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
            {/* ===== Subheader ===== */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            
            <h5 className="mb-0">Session Management</h5>
            <p className="text-muted small mb-0">
             Manage your coaching sessions and track client progress
            </p>
          </div>
        </div>
           {/* ===== Tabs ===== */}
         <SessionsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
         {activeTab === "Upcoming" && <UpcomingSessions />}
{activeTab === "Completed" && <CompletedSessions/>}
{activeTab === "Calendar" && <CalendarView/>}

        </div>
          </div>
  )
}
