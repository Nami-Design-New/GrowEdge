import { useLocation, useNavigate } from "react-router";
import ClientInfoCard from "../../components/CoachDashboard/ClientDetails/ClientInfoCard";
import AchievementsCard from "../../components/CoachDashboard/ClientDetails/AchievementsCard";
import NotesCard from "../../components/CoachDashboard/ClientDetails/NotesCard";
import QuickActions from "../../components/CoachDashboard/ClientDetails/QuickActionsCard";
import SessionSummaryCard from "../../components/CoachDashboard/ClientDetails/SessionSummaryCard";
import PerformanceCard from "../../components/CoachDashboard/ClientDetails/PerformanceCard";

export default function ClientDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  // 🧠 نحاول نجيب الداتا من state
  const client = location.state?.client;

  // لو مفيش داتا (مثلاً دخلت الصفحة مباشرة)
  if (!client) {
    return (
      <div className="client-details text-center mt-5">
        <h5>No client data found.</h5>
        <button className="back-btn mt-3" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left me-2"></i>
          Back to Clients
        </button>
      </div>
    );
  }

  return (
    <div className="client-details">
      <div className="container">
        {/* ===== Header ===== */}
        <div className="client-header-bar">
          <div className="client-info">
            <h5>{client.name}</h5>
            <span className="text-muted fw-normal">
              {client.role} • {client.industry || "—"}
            </span>
          </div>

          <div className="header-actions">
            <button className="back-btn" onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left me-2"></i>
              Back to Clients
            </button>
            <button className="schedule-btn">
              <i className="fa-regular fa-calendar-days me-2"></i>
              Schedule Session
            </button>
          </div>
        </div>

        {/* ===== Content ===== */}
        <div className="row g-4">
          <div className="col-lg-7">
            <ClientInfoCard client={client} />
            <AchievementsCard achievements={client.achievements || []} />
            <NotesCard notes={client.notes || []} />
          </div>

          <div className="col-lg-5">
            <QuickActions />
            <SessionSummaryCard client={client} />
            <PerformanceCard client={client} />
          </div>
        </div>
      </div>
    </div>
  );
}
