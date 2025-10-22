import { useState } from "react";
import Sidebar from "../../ui/layout/Sidebar";
import EmptyStateCard from "../../ui/cards/EmptyStateCard";

export default function Internships() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const internships = []; 

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content p-0 p-md-4">
        <div className="overview-header">
          <h5>Internships</h5>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5 className="mb-0">Startup Internships</h5>
            <p className="text-muted small mb-0">
              Discover exciting internship opportunities at innovative startups
            </p>
          </div>
        </div>

        {internships.length === 0 ? (
          <EmptyStateCard
            title="Startup Internships"
            subtitle="Explore hands-on experience at emerging companies"
            icon="fa-solid fa-briefcase"
            hasData={false}
            emptyText="No internships available right now"
            buttonText="Browse All Startups"
            link="/startup-internships"
          />
        ) : (
          <div>  </div>
        )}
      </div>
    </div>
  );
}
