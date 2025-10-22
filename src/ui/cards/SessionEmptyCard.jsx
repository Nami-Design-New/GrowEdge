import { Link } from "react-router";


export default function SessionEmptyCard({
    icon,
    title,
    subtitle,
    buttonText,
}) {
    return (
        <div className="session-empty-card">
            <i className={`${icon} fa-2x mb-3 text-muted`}></i>
            <h6 className="fw-semibold text-muted mb-1">{title}</h6>
            <p className="text-secondary small mb-4">{subtitle}</p>
            <Link to="/career-coaching" className="browse-btn">
                {buttonText}
            </Link>
        </div>
    );
}
