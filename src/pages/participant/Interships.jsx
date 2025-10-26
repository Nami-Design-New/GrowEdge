import { useState, useEffect } from "react";
import Sidebar from "../../ui/layout/Sidebar";
import EmptyStateCard from "../../ui/cards/EmptyStateCard";
import BookedInternship from "../../ui/cards/BookedInternshipCard";
import SkeletonCard from "../../ui/cards/SkeletonCard";

export default function Internships() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  //save internships from localStorage
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const saved = JSON.parse(localStorage.getItem("myInternships")) || [];
      setInternships(saved);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="dashboard-layout">
      {/* ===== Sidebar ===== */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content p-0 p-md-4">
        {/* ===== Header ===== */}
        <div className="overview-header d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Internships</h5>
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
            <h5 className="mb-0">Startup Internships</h5>
            <p className="text-muted small mb-0">
              Discover exciting internship opportunities at innovative startups
            </p>
          </div>
        </div>

        {/* ===== Handling states ===== */}
        {loading ? (
          <div className="row">
            {Array.from({ length: internships.length || 1 }).map((_, idx) => (
              <div key={idx} className="col-md-6 col-12 mb-4">
                <SkeletonCard />
              </div>
            ))}
          </div>
        ) : internships.length === 0 ? (
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
          <div className="row">
            {internships.map((intern, idx) => (
              <div key={idx} className="col-md-6 col-12 mb-4">
                <BookedInternship {...intern} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
