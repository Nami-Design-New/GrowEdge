import BottleneckAnalysis from "./BottleneckAnalysis";
import HiringTeamPerformance from "./HiringTeamPerformance";
import PerformanceRecommendations from "./PerformanceRecommendations";
import RecruitmentGoals from "./RecruitmentGoals";

export default function Performance() {
  return (
    <div className="performance-page row">
            <div className=" col-12">
        <RecruitmentGoals />
        </div>
         <div className="col-12 col-md-6 mt-3">
        <HiringTeamPerformance />
        </div>
          <div className="col-12 col-md-6 mt-3">
        <BottleneckAnalysis />
        </div>
          <div className=" col-12 mt-3">
        <PerformanceRecommendations />
        </div>

        
      </div>
  

  
  );
}
