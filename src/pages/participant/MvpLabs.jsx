import { useState, useEffect } from "react";
import Sidebar from "../../components/Dashboard/ParticipantSidebar";
import EmptyStateCard from "../../ui/cards/EmptyStateCard";
import MvpCard from "../../ui/cards/MvpCard";

export default function MVP() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const storedIdeas = JSON.parse(localStorage.getItem("mvpIdeas")) || [];
    setInternships(storedIdeas);
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content p-0 p-md-4">
        {/* ===== Header ===== */}
        <div className="overview-header">
          <h5>MVP Labs</h5>
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
            <h5 className="mb-0">MVP Labs</h5>
            <p className="text-muted small mb-0">
              Turn your innovative ideas into funded startups
            </p>
          </div>
        </div>

        {/* ===== content ===== */}
        {internships.length === 0 ? (
          <EmptyStateCard
            title="Have a Startup Idea?"
            subtitle="MVP Labs provides up to $50,000 in seed funding, expert mentorship, and comprehensive support to help you build and launch your startup idea."
            icon="fa-solid fa-lightbulb"
            hasData={false}
            emptyText="Submit your innovative idea today and bring it to life!"
            buttonText="Submit Idea"
            link="/mvp-labs"
          />
        ) : (
          <div className="row">
            {internships.map((idea, index) => (
              <div className="col-md-12 col-lg-6 mb-4" key={index}>
                <MvpCard idea={idea} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
