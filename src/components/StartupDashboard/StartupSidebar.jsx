import { NavLink } from "react-router";

export default function Sidebar({ isOpen, onClose }) {
  const name = "Sarah Ahmed ";
  const role = "Startup";

  const avatarLetter = name.charAt(0).toUpperCase();

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      {/* Sidebar container */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* ===== User Info ===== */}
        <div className="user-info">
          <div className="avatar">{avatarLetter}</div>
          <div>
            <h4 className="username">{name}</h4>
            <span className="role">{role}</span>
          </div>
        </div>

        {/* ===== Navigation Menu ===== */}
        <nav className="menu">
          <NavLink to="/startup-dashboard" end className="menu-item">
            <i className="fa-solid fa-house"></i>
            <span>Overview</span>
          </NavLink>

            <NavLink to="/startup-dashboard/Internships" className="menu-item">
            <i className="fa-solid fa-briefcase"></i>
            <span>Internships</span>
          </NavLink>

          <NavLink to="/startup-dashboard/Candidates" className="menu-item">
            <i className="fa-solid fa-users"></i>
            <span>Candidates</span>
          </NavLink>

          <NavLink to="/startup-dashboard/analytics" className="menu-item">
            <i className="fa-solid fa-chart-line"></i>
            <span>Analytics</span>
          </NavLink>

          <NavLink to="/startup-dashboard/edit-profile" className="menu-item">
            <i className="fa-solid fa-user"></i>
            <span>Edit Profile</span>
          </NavLink>

          <NavLink to="/startup-dashboard/messages" className="menu-item">
            <i className="fa-solid fa-message"></i>
            <span>Messages</span>
          </NavLink>

          <NavLink to="/startup-dashboard/notifications" className="menu-item">
            <i className="fa-solid fa-bell"></i>
            <span>Notifications</span>
          </NavLink>

          <NavLink to="/startup-dashboard/settings" className="menu-item">
            <i className="fa-solid fa-gear"></i>
            <span>Settings</span>
          </NavLink>
        </nav>

        {/* ===== Sign Out Button ===== */}
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
