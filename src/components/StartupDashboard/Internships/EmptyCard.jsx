import { Link } from "react-router";

export default function EmptyCard({
  icon,
  title,
  text,
  buttonText,
  link,
}) {
  return (
    <div className="empty-card mt-3">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
      <Link to={link} className="btn btn-dark">
        <i className="fa-solid fa-plus"></i> {buttonText}
      </Link>
    </div>
  );
}
