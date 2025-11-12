import { useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../../components/StartupDashboard/StartupSidebar";
import InputField from "../../ui/forms/InputField";
import SelectField from "../../ui/forms/SelectField";

export default function CreateInternship() {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        department: "",
        location: "",
        type: "",
        duration: "",
        salary: "",
        startDate: "",
        deadline: "",
        description: "",
        responsibilities: "",
        requirements: "",
        skills: "",
        benefits: "",
        status: "Draft",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (status) => {
        const storedInternships =
            JSON.parse(localStorage.getItem("startupInternships")) || [];
        const updated = [...storedInternships, { ...formData, status }];
        localStorage.setItem("startupInternships", JSON.stringify(updated));
        navigate("/Startup-Internships");
    };

    return (
        <div className="dashboard-layout">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="main-content p-0 p-md-4">
                <div className="overview-header">
                    <h5>Internships</h5>
                    <button
                        className="sidebar-toggle-btn"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 className="mb-0">Create New Internship</h5>
                        <p className="text-muted small mb-0">
                            Post a new internship opportunity to attract top talent
                        </p>
                    </div>
                     <button onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left me-2"></i> Back to Internships
      </button>
                </div>

                <div className="create-internship container py-4">
                    <form className="form_ui">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <InputField
                                    label="Position Title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        <div className="col-md-6 mb-3">
                                <SelectField
                                    label="Department"
                                    name="department"
                                    defaultSelect="Select Department"
                                    options={[
                                        { value: "Frontend", name: "Frontend" },
                                        { value: "Backend", name: "Backend" },
                                        { value: "Design", name: "Design" },
                                        { value: "Marketing", name: "Marketing" },
                                    ]}
                                    value={formData.department}
                                    onChange={handleChange}
                                />
                        </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <InputField
                                    label="Location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <SelectField
                                    label="Work Type"
                                    name="type"
                                    defaultSelect="Select Type"
                                    options={[
                                        { value: "Remote", name: "Remote" },
                                        { value: "On-site", name: "On-site" },
                                        { value: "Hybrid", name: "Hybrid" },
                                    ]}
                                    value={formData.type}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <InputField
                                    label="Duration"
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <InputField
                                    label="Monthly Stipend"
                                    name="salary"
                                    value={formData.salary}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <InputField
                                    type="date"
                                    label="Start Date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <InputField
                                    type="date"
                                    label="Application Deadline"
                                    name="deadline"
                                    value={formData.deadline}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <InputField
                                    as="textarea"
                                    rows={3}
                                    label="Job Description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <InputField
                                    as="textarea"
                                    rows={3}
                                    label="Responsibilities"
                                    name="responsibilities"
                                    value={formData.responsibilities}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <InputField
                                    as="textarea"
                                    rows={3}
                                    label="Requirements"
                                    name="requirements"
                                    value={formData.requirements}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-3">
                                <InputField
                                    label="Skills (comma separated)"
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-4">
                                <InputField
                                    label="Benefits (comma separated)"
                                    name="benefits"
                                    value={formData.benefits}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="btn-group px-3">
                            <button
                                type="submit"
                                className=" btn-outline"
                                onClick={() => handleSubmit("Submit")}
                            >
                                <i className="fa-solid fa-paper-plane"></i>
                                Pubplish Internship
                            </button>
                            <button
                                type="button"
                                className=" btn-dark"
                                onClick={() => handleSubmit("Draft")}
                            >
                                Save as Draft
                            </button>
                            <button
                                type="button"
                                className=" btn-danger"
                                onClick={() => navigate("/startup-dashboard/Internships")}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
