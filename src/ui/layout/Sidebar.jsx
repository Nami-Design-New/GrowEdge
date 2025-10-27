// import React from "react";
import { NavLink } from "react-router";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay (click outside to close) */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      {/* Sidebar container */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="user-info">
          <div className="avatar">U</div>
          <div>
            <h4 className="username">User</h4>
            <span className="role">Participant</span>
          </div>
        </div>

        <nav className="menu">
          <NavLink to="/dashboard" end className="menu-item">
            <i className="fa-solid fa-house"></i>
            <span>Overview</span>
          </NavLink>

          <NavLink to="/dashboard/coaching" className="menu-item">
            <i className="fa-solid fa-chalkboard-user"></i>
            <span>Coaching</span>
          </NavLink>

          <NavLink to="/dashboard/internships" className="menu-item">
            <i className="fa-solid fa-briefcase"></i>
            <span>Internships</span>
          </NavLink>

          <NavLink to="/dashboard/mvp-labs" className="menu-item">
            <i className="fa-solid fa-lightbulb"></i>
            <span>MVP Labs</span>
          </NavLink>

          <NavLink to="/dashboard/profile" className="menu-item">
            <i className="fa-solid fa-user"></i>
            <span>Edit Profile</span>
          </NavLink>

          <NavLink to="/dashboard/messages" className="menu-item">
            <i className="fa-solid fa-message"></i>
            <span>Messages</span>
          </NavLink>

          <NavLink to="/dashboard/notifications" className="menu-item">
            <i className="fa-solid fa-bell"></i>
            <span>Notifications</span>
          </NavLink>

          <NavLink to="/dashboard/settings" className="menu-item">
            <i className="fa-solid fa-gear"></i>
            <span>Settings</span>
          </NavLink>
        </nav>

        <div className="bottom">
          <button className="signout">
            <i className="fa-solid fa-right-from-bracket"></i>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
