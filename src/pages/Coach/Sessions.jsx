// import React from 'react'
import { useState } from "react";
import Sidebar from "../../components/Dashboard/CoachSidebar";
export default function Sessions() {
      const [sidebarOpen, setSidebarOpen] = useState(false);
    
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
        </div>
          </div>
  )
}
