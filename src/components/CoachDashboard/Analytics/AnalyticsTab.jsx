import CoachingGoals from "./CoachingGoals";
import PerformanceMetrics from "./PerformanceMetrics";

export default function AnalyticsTab() {
  return (
    <div className="overview-tab mt-4">

      <div className="row mt-4">
        <div className="col-lg-6 mb-4">
           <PerformanceMetrics />
        </div>
        <div className="col-lg-6 mb-4">
          <CoachingGoals />

        </div>
      </div>
    </div>
  );
}
