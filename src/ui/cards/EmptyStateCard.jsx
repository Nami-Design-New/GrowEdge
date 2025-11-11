import { Link } from "react-router";

export default function EmptyStateCard({
  title,
  subtitle,
  icon,
  hasData,
  data,
  emptyText,
  buttonText,
  link,
}) {
  return (
    <div className="empty-state-card">
      <div className="card-header">
        <div className="text-content">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="card-body">
        {hasData ? (
          <div className="data-content">
            <p>{data}</p>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">
              <i className={icon}></i>
            </div>
            <p>{emptyText}</p>
            <Link to={link} className="btn-outline">
              {buttonText}
            </Link>
       
          </div>
        )}
      </div>
    </div>
  );
}
