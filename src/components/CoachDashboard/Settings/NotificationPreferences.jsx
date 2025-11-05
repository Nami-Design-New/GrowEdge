import { useState } from "react";

export default function NotificationPreferences() {
  const initialData = {
    email: {
      messages: true,
      sessions: true,
      applications: false,
      achievements: true,
      marketing: false,
    },
    push: {
      messages: true,
      sessions: true,
      applications: false,
      achievements: true,
    },
    sound: true,
    desktop: true,
  };

  const [formData, setFormData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = (section, key) => {
    if (!isEditing) return;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: !prev[section][key],
      },
    }));
  };

  const handleSimpleToggle = (key) => {
    if (!isEditing) return;
    setFormData((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setFormData(initialData);
    setIsEditing(false);
  };
  const handleSave = () => {
    console.log("Saved Notification Preferences:", formData);
    setIsEditing(false);
  };

  return (
    <div className="info-form p-4">
      <h6 className="section-title mb-3">
        <i className="fa-regular fa-bell me-2"></i> Notification Preferences
      </h6>

      <form className="form_ui">
        {/* ===== EMAIL NOTIFICATIONS ===== */}
        <div className="mb-4">
          <label className="fw-semibold d-block mb-2">
            Email Notifications
          </label>
          {Object.keys(formData.email).map((key) => (
            <div
              key={key}
              className="d-flex align-items-center justify-content-between mb-2"
            >
              <div>
                <strong className="text-capitalize">{key}</strong>
                <br />
                <small className="text-muted">
                  Receive email notifications for {key}
                </small>
              </div>

              <div
                className={`custom-switch ${
                  formData.email[key] ? "on" : ""
                } ${!isEditing ? "disabled" : ""}`}
                onClick={() => handleToggle("email", key)}
              >
                <div className="switch-circle"></div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== PUSH NOTIFICATIONS ===== */}
        <div className="mb-4">
          <label className="fw-semibold d-block mb-2">
            Push Notifications
          </label>
          {Object.keys(formData.push).map((key) => (
            <div
              key={key}
              className="d-flex align-items-center justify-content-between mb-2"
            >
              <div>
                <strong className="text-capitalize">{key}</strong>
                <br />
                <small className="text-muted">
                  Receive push notifications for {key}
                </small>
              </div>

              <div
                className={`custom-switch ${
                  formData.push[key] ? "on" : ""
                } ${!isEditing ? "disabled" : ""}`}
                onClick={() => handleToggle("push", key)}
              >
                <div className="switch-circle"></div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== SOUND NOTIFICATIONS ===== */}
        <div className="mb-4 d-flex align-items-center justify-content-between">
          <label className="fw-semibold mb-0">
            Sound Notifications <br />
            <small className="text-muted">
              Play sound for notifications
            </small>
          </label>
          <div
            className={`custom-switch ${
              formData.sound ? "on" : ""
            } ${!isEditing ? "disabled" : ""}`}
            onClick={() => handleSimpleToggle("sound")}
          >
            <div className="switch-circle"></div>
          </div>
        </div>

        {/* ===== DESKTOP NOTIFICATIONS ===== */}
        <div className="mb-4 d-flex align-items-center justify-content-between">
          <label className="fw-semibold mb-0">
            Desktop Notifications <br />
            <small className="text-muted">
              Show desktop notifications
            </small>
          </label>
          <div
            className={`custom-switch ${
              formData.desktop ? "on" : ""
            } ${!isEditing ? "disabled" : ""}`}
            onClick={() => handleSimpleToggle("desktop")}
          >
            <div className="switch-circle"></div>
          </div>
        </div>

        {/* ===== BUTTONS ===== */}
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
