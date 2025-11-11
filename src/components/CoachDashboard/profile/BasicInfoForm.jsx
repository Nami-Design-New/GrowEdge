import { useState } from "react";
import InputField from "../../../ui/forms/InputField";
import SelectField from "../../../ui/forms/SelectField";

export default function BasicInfoForm() {
  const initialData = {
    fullName: "Khaled Ismail",
    email: "Khaled@example.com",
    phone: "+966501234567",
    dob: "1990-01-01",
    gender: "Female",
    nationality: "Saudi Arabian",
    city: "Riyadh",
    country: "Saudi Arabia",
    bio: "Hello! I am Mariam, a web developer.",
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
    console.log("Saved Data:", formData);
  };

  return (
    <div className="info-form p-4">
      <h6 className="section-title mb-3">
        <i className="fa-regular fa-user me-2"></i> Basic Information
      </h6>

      <form className="form_ui">
        <div className="row">
          <div className="col-md-6 mb-3">
            <InputField
              label="Full Name *"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="col-md-6 mb-3">
            <InputField
              label="Email Address *"
              type="email"
              name="email"
              value={formData.email}
              readOnly
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <InputField
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+966501234567"
            />
          </div>

          <div className="col-md-3 mb-3">
            <InputField
              label="Date of Birth"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3 mb-3">
            <SelectField
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              defaultSelect="Select gender"
              options={[
                { value: "Male", name: "Male" },
                { value: "Female", name: "Female" },
              ]}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <InputField
              label="Nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              placeholder="e.g., Saudi Arabian"
            />
          </div>

          <div className="col-md-4 mb-3">
            <InputField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
            />
          </div>

          <div className="col-md-4 mb-3">
            <InputField
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter your country"
            />
          </div>
        </div>

        <div className="mb-4 mx-2">
          <InputField
            as="textarea"
            rows={3}
            label="Bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell others about yourself..."
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
