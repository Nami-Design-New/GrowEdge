import StatsCards from "../../Dashboard/Overview/StatsCards";
import RecentPayments from "./RecentPayments";


export default function PaymentsTab() {
const Stats = [
  {
    icon: "fa-solid fa-money-bill-wave",
    title: "Payments Received",
    value: "$390",
    change: "",
    color: "#28a745",
  },
  {
    icon: "fa-regular fa-hourglass-half",
    title: "Pending Payments",
    value: "$150",
    change: "",
    color: "#ffc107",
  },
  {
    icon: "fa-solid fa-rotate",
    title: "Processing",
    value: "$150",
    change: "",
    color: "#17a2b8",
  },
];


  return (
    <div className="overview-tab mt-4">
      <StatsCards stats={Stats} />
      <RecentPayments />
    </div>
  );
}
