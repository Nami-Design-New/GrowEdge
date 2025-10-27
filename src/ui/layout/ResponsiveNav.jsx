// import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

function ResponsiveNav() {
  // const { t } = useTranslation();

  return (
    <div className="small_menu">
      <NavLink to="/profile" className="menu_item">
        <i className="fa-regular fa-user"></i>
        <span>الملف الشخصي</span>
      </NavLink>

      <NavLink to="/profile" className="menu_item">
        <i className="fa-regular fa-user"></i>
        <span>الملف الشخصي</span>
      </NavLink>

  <NavLink to="/profile" className="menu_item">
        <i className="fa-regular fa-user"></i>
        <span>الملف الشخصي</span>
      </NavLink>

    </div>
  );
}

export default ResponsiveNav;
