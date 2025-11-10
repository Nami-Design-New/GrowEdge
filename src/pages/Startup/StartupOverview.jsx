import { useState } from "react";
import Sidebar from "../../components/StartupDashboard/StartupSidebar";

export default function StartupOverview() {
  const [sidebarOpen, setSidebarOpen] = useState(false);



  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

    
    </div>
  );
}
