import { Dropdown } from "react-bootstrap";
import { Link } from "react-router";
// import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function UserDropDown() {
  // const { t } = useTranslation();
  const { client } = useSelector((state) => state.clientData);

  const displayName = client?.displayName || "Mariam Samir";

  return (
    <Dropdown>
      <Dropdown.Toggle className="user_dropdown">
        <span>{displayName}</span>
        <i className="fa fa-chevron-down"></i>
      </Dropdown.Toggle>

  <Dropdown.Menu className="custom-dropdown-menu text-end">
    <div className="dd-header">
      <div className="avatar">S</div>
      <div className="user-meta">
        <div className="name">Mariam Samir</div>
        <div className="email">Mariam.coach@example.com</div>
        <div className="role-badge">Coach</div>
      </div>
    </div>

    <div className="divider" />

    <div className="menu-links">
      <Dropdown.Item as={Link} to="/dashboard" className="dropdown-item">
        <i className="fa-regular fa-chart-line"></i> Dashboard
      </Dropdown.Item>
      <Dropdown.Item as={Link} to="/settings" className="dropdown-item">
        <i className="fa-regular fa-gear"></i> Settings
      </Dropdown.Item>
    </div>

    <div className="switch-title">Switch Demo User</div>

    <div className="demo-users">
      <div className="user-item">
        <div className="icon">أ</div>
        <div className="meta">
          <div className="u-name">أحمد حسن</div>
          <div className="u-role">Participant</div>
        </div>
      </div>

      <div className="user-item" style={{ background: "#f3f0ff" }}>
        <div className="icon">س</div>
        <div className="meta">
          <div className="u-name">سارة أحمد</div>
          <div className="u-role">Coach</div>
        </div>
        <div className="badge-current">Current</div>
      </div>

      {/* المزيد... */}
    </div>

    <div className="logout">
      <i className="fa-solid fa-arrow-right-from-bracket"></i>
      Log out
    </div>
  </Dropdown.Menu>
</Dropdown>

  );
}
