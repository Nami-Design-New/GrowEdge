import { useState } from "react";
import Sidebar from "../../ui/layout/Sidebar";
export default function Setting() {
      const [sidebarOpen, setSidebarOpen] = useState(false);
    
  return (
   <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content p-0 p-md-4">
        <div className="overview-header ">
          <h5>Settings</h5>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
                </div>
        </div>

          )
}
