import StatsCards from "../../Dashboard/Overview/StatsCards";
import EarningsByType from "./EarningsCard";
import MonthlyEarningsTrend from "./MonthlyEarnings";

export default function OverviewTab() {
  const coachStats = [
    {
      icon: "fa-solid fa-dollar-sign",
      title: "This Month",
      value: "$4,800",
      change: "+7.7%",
      color: "#6c63ff",
    },
    {
      icon: "fa-solid fa-calendar-days",
      title: "Sessions",
      value: "32",
      change: "+8.6%",
      color: "#28a745",
    },
    {
      icon: "fa-solid fa-star",
      title: "Avg. Rating",
      value: "4.8",
      change: "Excellent performance",
      color: "#ffc107",
    },
    {
      icon: "fa-solid fa-clock",
      title: "Hours Worked",
      value: "48",
      change: "$100/hour",
      color: "#17a2b8",
    },
  ];

  return (
    <div className="overview-tab mt-4">
      <StatsCards stats={coachStats} />
      <EarningsByType />
      <MonthlyEarningsTrend />
    </div>
  );
}
