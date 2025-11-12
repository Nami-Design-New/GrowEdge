import StatsCards from "../../../Dashboard/Overview/StatsCards";
import HiringPipeline from "./HiringPipeline";
import PositionPerformance from "./PositionPerformance";

export default function Overview() {
    const Stats = [
        {
            icon: "fa-solid fa-file-lines",
            title: "Total Applications",
            value: 120,
            change: "+26.3%",
            subtitle: "vs last month",
            color: "#28a745",
        },
        {
            icon: "fa-solid fa-eye",
            title: "Profile Views",
            value: 680,
            change: "+30.8%",
            subtitle: "vs last month",
            color: "#17a2b8",
        },
        {
            icon: "fa-solid fa-user-check",
            title: "Hires",
            value: 6,
            change: "+50.0%",
            subtitle: "vs last month",
            color: "#f7941d",
        },
        {
            icon: "fa-solid fa-clock",
            title: "Avg. Time to Hire",
            value: "18d",
            change: "-14%",
            subtitle: "improvement",
            color: "#6c63ff",
        },
    ];

    return (
        <div>
            <StatsCards stats={Stats} />
            <HiringPipeline/>
            <PositionPerformance />
        </div>
    )
}
