import CandidateQuality from "./CandidateQuality";
import MonthlyApplications from "./MonthlyApplications";
import ResponseRate from "./ResponseRate";
import TimeToHire from "./TimeToHire";

export default function Recruitment() {
    return (
        <div className="recruitment-page row">
            <div className=" col-6">
                <CandidateQuality />
            </div>
            <div className=" col-6">
                <TimeToHire />
            </div>
            <div className="col-12 mt-3">
                <ResponseRate />
            </div>
            <div className="col-12 mt-3">
                <MonthlyApplications />
            </div>


        </div>
    );
}
