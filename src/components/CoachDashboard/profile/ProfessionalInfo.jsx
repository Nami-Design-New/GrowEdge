import { useState } from "react";
import InputField from "../../../ui/forms/InputField";
import SelectField from "../../../ui/forms/SelectField";

export default function ProfessionalInfoForm() {
  const initialData = {
    educationLevel: "Bachelor's Degree",
    fieldOfStudy: "Computer Science",
    university: "Cairo University",
    graduationYear: "2020",
    jobTitle: "Software Engineer",
    company: "Tech Solutions",
    experienceLevel: "Mid Level",
    skills: "React, Node.js, MongoDB",
    languages: "English, Arabic",
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setFormData(initialData);
  };

  const handleSave = () => {
    console.log("Saved Professional Info:", formData);
  };

  return (
    <div className="info-form p-4">
      <h6 className="section-title mb-3">
        <i className="fa-solid fa-briefcase me-2"></i> Professional Information
      </h6>

      <form className="form_ui">
        <div className="row">
          <div className="col-md-6 mb-3">
            <SelectField
              label="Education Level"
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              defaultSelect="Select education level"
              options={[
                { value: "High School", name: "High School" },
                { value: "Bachelor's Degree", name: "Bachelor's Degree" },
                { value: "Master's Degree", name: "Master's Degree" },
                { value: "PhD", name: "PhD" },
              ]}
            />
          </div>

          <div className="col-md-6 mb-3">
            <InputField
              label="Field of Study"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
              onChange={handleChange}
              placeholder="e.g., Computer Science"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <InputField
              label="University"
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="Enter your university"
            />
          </div>

          <div className="col-md-6 mb-3">
            <InputField
              label="Graduation Year"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              placeholder="e.g., 2020"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <InputField
              label="Job Title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="e.g., Software Engineer"
            />
          </div>

          <div className="col-md-6 mb-3">
            <InputField
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your company"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <SelectField
              label="Experience Level"
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              defaultSelect="Select experience level"
              options={[
                { value: "Intern", name: "Intern" },
                { value: "Junior", name: "Junior" },
                { value: "Mid Level", name: "Mid Level" },
                { value: "Senior", name: "Senior" },
                { value: "Lead", name: "Lead" },
              ]}
            />
          </div>

          <div className="col-md-6 mb-3">
            <InputField
              label="Skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Add skill..."
            />
          </div>
        </div>

        <div className="mb-4 mx-1">
          <InputField
            label="Languages"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            placeholder="Add language..."
          />
        </div>

        <div className="btn-group px-2">
          <button type="button" className="btn-danger" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="btn-dark" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
