import { useNavigate } from "react-router";
import ClientInfoCard from "../../components/CoachDashboard/ClientDetails/ClientInfoCard";
import AchievementsCard from "../../components/CoachDashboard/ClientDetails/AchievementsCard";
import NotesCard from "../../components/CoachDashboard/ClientDetails/NotesCard";
import QuickActions from "../../components/CoachDashboard/ClientDetails/QuickActionsCard";
import SessionSummaryCard from "../../components/CoachDashboard/ClientDetails/SessionSummaryCard";
import PerformanceCard from "../../components/CoachDashboard/ClientDetails/PerformanceCard";

export default function ClientDetails() {
  const navigate = useNavigate();

  const client = {
    name: "Sarah Chen",
    role: "Marketing Manager",
    industry: "Technology",
    email: "sarah.chen@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinedDate: "1/15/2024",
    goal: "Career Transition",
    status: "Active",
    goalDescription:
      "Transition from marketing to product management within 6 months",
    progress: 75,
    achievements: [
      "Completed PM course",
      "Built first product case study",
      "Landed 3 PM interviews",
    ],
    notes: [
      "Very motivated and takes action on recommendations",
      "Strong analytical background, good fit for PM role",
      "Needs to work on stakeholder communication skills",
    ],
    totalSessions: 8,
    completedSessions: 6,
    nextSession: "2024-03-20 at 10:00 AM",
    nextTopic: "Career Strategy",
    lastSession: "2024-03-15",
    lastSummary:
      "Discussed PM interview preparation and portfolio development. Client is making excellent progress.",
    rating: 4.8,
    revenue: 1200,
  };

  return (
    <div className="client-details">
      <div className="container">
        {/* ===== Header ===== */}
     <div className="client-header-bar">
  <div className="client-info">
    <h5>{client.name}</h5>
    <span className="text-muted fw-normal">
      {client.role} • {client.industry}
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


        <div className="row g-4">
          <div className="col-lg-7">
            <ClientInfoCard client={client} />
            <AchievementsCard achievements={client.achievements} />
            <NotesCard notes={client.notes} />
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
