import { useState } from "react";
import Sidebar from "../../ui/layout/Sidebar";
import ChatSidebar from "../../components/Dashboard/Messages/ChatSidebar";
import ChatWindow from "../../components/Dashboard/Messages/ChatWindow";

export default function Messages() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="messg-content">
        <div className="overview-header p-0 p-md-4 mb-md-0">
          <h5 >Messages</h5>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div className="messages-page">
          <ChatSidebar />
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}
