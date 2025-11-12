import { useState } from "react";
import InputField from "../../../ui/forms/InputField";

export default function AccountSettings() {
  const lastChanged="3 months ago";
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordData, setPasswordData] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handlePasswordUpdate = () => {
    setShowPasswordForm(!showPasswordForm);
  };

  const handleSavePassword = () => {
    console.log("Updated Password:", passwordData);
    setShowPasswordForm(false);
    setPasswordData({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="info-form p-4 account-settings-page">
      <h6 className="section-title mb-3">
        <i className="fa-solid fa-user-gear me-2"></i> Account Management
      </h6>

      <div className="account-settings">
        {/* ===== Change Password ===== */}
        <div className="setting-card">
          <div className="setting-header">
            <div>
              <h6 className="title">Change Password</h6>
              <small className="muted">Last changed {lastChanged}</small>
            </div>
            <button className="side-btn" onClick={handlePasswordUpdate}>
              <i className="fa-solid fa-key me-2"></i> Update
            </button>
          </div>

          {showPasswordForm && (
            <div className="password-form">
              <InputField
                label="Current Password"
                type="password"
                value={passwordData.current}
                onChange={(e) =>
                  setPasswordData({ ...passwordData, current: e.target.value })
                }
              />

              <InputField
                label="New Password"
                type="password"
                value={passwordData.new}
                onChange={(e) =>
                  setPasswordData({ ...passwordData, new: e.target.value })
                }
              />

              <InputField
                label="Confirm Password"
                type="password"
                value={passwordData.confirm}
                onChange={(e) =>
                  setPasswordData({ ...passwordData, confirm: e.target.value })
                }
              />

              <div className="actions mt-2">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => setShowPasswordForm(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={handleSavePassword}
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ===== Two-Factor Authentication ===== */}
        <div className="setting-card">
          <div className="setting-header">
            <div>
              <h6 className="title">Two-Factor Authentication</h6>
              <small className="muted">
                Add an extra layer of security to your account
              </small>

              {!twoFAEnabled ? (
                <button
                  className="side-btn mt-2"
                  onClick={() => setTwoFAEnabled(true)}
                >
                  <i className="fa-solid fa-lock me-2"></i> Enable 2FA
                </button>
              ) : (
                <button className="side-btn outline mt-2" disabled>
                  <i className="fa-solid fa-circle-check me-2"></i> Enabled
                </button>
              )}
            </div>

            {!twoFAEnabled && (
              <span className="badge">Not Enabled</span>
            )}
          </div>
        </div>

        {/* ===== Active Sessions ===== */}
        <div className="setting-card">
          <div className="setting-header">
            <div>
              <h6 className="title">Active Sessions</h6>
              <small className="muted">
                Manage devices that are signed into your account
              </small>
            </div>
            <button className="side-btn">
              <i className="fa-regular fa-eye me-2"></i> View All
            </button>
          </div>
        </div>

        {/* ===== Download Your Data ===== */}
        <div className="setting-card">
          <div className="setting-header">
            <div>
              <h6 className="title">Download Your Data</h6>
              <small className="muted">Download a copy of your data</small>
            </div>
            <button className="side-btn">
              <i className="fa-solid fa-file-export me-2"></i> Export
            </button>
          </div>
        </div>

        {/* ===== Danger Zone ===== */}
        <h6 className="danger-title">
          <i className="fa-solid fa-triangle-exclamation me-2"></i> Danger Zone
        </h6>

        <div className="danger-zone">
          <div className="setting-header">
            <div>
              <strong>Delete Account</strong>
              <small>
                Permanently delete your account and all associated data
              </small>
            </div>
            <button className="btn btn-danger">
              <i className="fa-solid fa-trash me-2"></i> Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
