import { useState } from "react";
import SelectField from "../../../ui/forms/SelectField";

export default function Preferences() {
  const initialData = {
    notifications: true,
    privacy: "Public",
    timezone: "Asia/Riyadh (GMT+3)",
  };

  const [formData, setFormData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => {
    if (isEditing) {
      setFormData((prev) => ({
        ...prev,
        notifications: !prev.notifications,
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setFormData(initialData);
    setIsEditing(false);
  };

  const handleSave = () => {
    console.log("Saved Preferences:", formData);
    setIsEditing(false);
  };

  return (
    <div className="info-form p-4">
      <h6 className="section-title mb-3">
        <i className="fa-solid fa-lock me-2"></i> Privacy & Preferences
      </h6>

      <form className="form_ui">
        {/* ===== Notifications ===== */}
        <div className="mb-4 d-flex align-items-center justify-content-between">
          <label className="notification-label fw-semibold mb-0">
            Notifications <br />
            <small className="text-muted">
              Receive email and push notifications
            </small>
          </label>

          <div
            className={`custom-switch ${formData.notifications ? "on" : ""} ${
              !isEditing ? "disabled" : ""
            }`}
            onClick={handleToggle}
          >
            <div className="switch-circle"></div>
          </div>
        </div>

        {/* ===== Profile Visibility ===== */}
        <div className="mb-4">
          <SelectField
            label="Profile Visibility"
            name="privacy"
            value={formData.privacy}
            onChange={handleChange}
            defaultSelect="Select visibility"
            disabled={!isEditing}
            options={[
              { value: "Public", name: "Public - Anyone can see your profile" },
              {
                value: "Private",
                name: "Private - Only you can see your profile",
              },
            ]}
          />
        </div>

        {/* ===== Timezone ===== */}
        <div className="mb-4">
          <SelectField
            label="Timezone"
            name="timezone"
            value={formData.timezone}
            onChange={handleChange}
            defaultSelect="Select timezone"
            disabled={!isEditing}
            options={[
              { value: "Asia/Riyadh (GMT+3)", name: "Asia/Riyadh (GMT+3)" },
              { value: "Europe/London (GMT+1)", name: "Europe/London (GMT+1)" },
              {
                value: "America/New_York (GMT-4)",
                name: "America/New_York (GMT-4)",
              },
              { value: "Asia/Dubai (GMT+4)", name: "Asia/Dubai (GMT+4)" },
            ]}
          />
        </div>

        {/* ===== Buttons ===== */}
        <div className="btn-group px-2">
          {!isEditing ? (
            <button type="button" className="btn-dark" onClick={handleEdit}>
              Edit
            </button>
          ) : (
            <>
              <button
                type="button"
                className="btn-danger"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button type="button" className="btn-dark" onClick={handleSave}>
                Save Changes
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
