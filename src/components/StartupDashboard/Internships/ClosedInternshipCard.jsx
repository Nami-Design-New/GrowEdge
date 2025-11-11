export default function ClosedInternshipCard({ internship }) {
  return (
    <div className="closed-internship-card card-box">
      {/* ===== Header ===== */}
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="left d-flex align-items-center gap-2">
          <div className="icon">
            <i className="fa-regular fa-briefcase"></i>
          </div>
          <div>
            <h5 className="title">{internship.title}</h5>
            <div className="badges d-flex gap-1">
              <span className="status-badge closed">Closed</span>
              <span className="type-badge">{internship.type}</span>
            </div>
          </div>
        </div>
        {/* <div className="actions d-flex gap-2">
          <button className="more-btn">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </div> */}
      </div>

      <p className="description mt-2">{internship.description}</p>
    </div>
  );
}
