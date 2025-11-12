import { useState } from "react";
import Sidebar from "../../components/StartupDashboard/StartupSidebar";
import Tabs from "../../components/StartupDashboard/Candidates/Tabs";
import PiplineView from "../../components/StartupDashboard/Candidates/Pipline/PiplineView";
import Applications from "../../components/StartupDashboard/Candidates/Applications/Applications";
import Interviews from "../../components/StartupDashboard/Candidates/Interviews/Interviews";
export default function StartupCandidates() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Pipeline");
    return (
        <div className="dashboard-layout">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="main-content p-0 p-md-4">
                <div className="overview-header ">
                    <h5>Candidates</h5>
                    <button
                        className="sidebar-toggle-btn"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>

                <div className="sub-header">
                    <div className="info">
                        <h5 className="mb-0">Candidate Pipeline</h5>
                        <p className="text-muted small mb-0">
                            Review and manage internship applications
                        </p>
                    </div>

                    <button
                        className="btn btn-dark" >
                        <i className="fa-regular fa-download"></i>Export
                    </button>
                </div>

                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="tab-content mt-4">
                    {activeTab === "Pipeline" && <PiplineView />}
                    {activeTab === "Applications" && <Applications />}
                    {activeTab === "Interviews" && <Interviews />}
                </div>
                
            </div>
        </div>

    )
}
