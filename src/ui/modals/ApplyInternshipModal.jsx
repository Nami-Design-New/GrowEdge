import { useState } from "react";
import { Modal } from "react-bootstrap";
import InputField from "../../ui/forms/InputField";
import SelectField from "../../ui/forms/SelectField";

export default function ApplyInternshipModal({ show, setShow, internship }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    major: "",
    graduationYear: "",
    gpa: "",
    skills: "",
    resume: "",
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    setShow(false);
  };

  if (!internship) return null;

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, i) => currentYear - 5 + i);

  return (
    <Modal show={show} onHide={() => setShow(false)} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          Apply for Internship
          <br />
          <p className="text-muted mb-0">
            {internship.title} at {internship.company}
          </p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit} className="form_ui">
          {/* ===== Name Row ===== */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <InputField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
              />
            </div>
            <div className="col-md-6 mb-3">
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
              />
            </div>
          </div>

          {/* ===== Email & Phone ===== */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
              />
            </div>
            <div className="col-md-6 mb-3">
              <InputField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+20 10xxxxxxx"
              />
            </div>
          </div>

          {/* ===== University & Major ===== */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <InputField
                label="University"
                name="university"
                value={formData.university}
                onChange={handleChange}
                placeholder="Your university"
              />
            </div>
            <div className="col-md-6 mb-3">
              <InputField
                label="Major"
                name="major"
                value={formData.major}
                onChange={handleChange}
                placeholder="Your major"
              />
            </div>
          </div>

          {/* ===== Graduation Year (Select) & GPA ===== */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <SelectField
                label="Graduation Year"
                name="graduationYear"
                defaultSelect="Select year"
                options={years.map((year) => ({
                  value: year,
                  name: year.toString(),
                }))}
                value={formData.graduationYear}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <InputField
                label="GPA"
                name="gpa"
                value={formData.gpa}
                onChange={handleChange}
                placeholder="e.g. 3.8 / 4.0"
              />
            </div>
          </div>

          {/* ===== Skills & Resume Link ===== */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <InputField
                label="Relevant Skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="List your technical and soft skills"
              />
            </div>
            <div className="col-md-6 mb-3">
              <InputField
                label="Resume / Portfolio Link"
                name="resume"
                value={formData.resume}
                onChange={handleChange}
                placeholder="Link to Portfolio, GitHub, or Resume"
              />
            </div>
          </div>

          {/* ===== Cover Letter ===== */}
          <div className="mb-4 mx-2">
            <InputField
              as="textarea"
              rows={4}
              label="Cover Letter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Why are you interested in this internship and company?"
            />
          </div>

          {/* ===== Buttons ===== */}
          <div className="btn-group">
            <button className="btn-outline">
              Close
            </button>
            <button className="btn-dark" >
              Submit Application
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
