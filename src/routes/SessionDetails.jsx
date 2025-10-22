import { useNavigate } from "react-router";

export default function SessionDetails() {
  const navigate = useNavigate();

  const session = {
    coachInitials: "SJ",
    coachName: "Sarah Johnson",
    date: "Wednesday, October 22, 2025",
    time: "11:00 AM (60min)",
    status: "Scheduled",
    type: "Other",
    fee: "$150",
    bookedOn: "10/22/2025",
    goal: "Job Search Strategy",
    coachRating: 4.9,
    coachBio:
      "Former Google Engineering Manager with 10+ years experience helping professionals transition into tech careers. Specialized in helping new graduates land their first tech role and mid-career professionals make strategic career moves.",
    coachLocation: "Riyadh, Saudi Arabia",
    coachLanguages: "English, Arabic",
    coachExpertise: [
      "Career Transition",
      "Tech Industry",
      "Leadership",
      "Resume Review",
    ],
    sessionId: "27940820",
    duration: "60 minutes",
  };

  return (
    <div className="session-details py-4">
      <div className="container">
        <div className="d-flex align-items-center session-hed">
          <button
            className="btn btn-link text-decoration-none me-3"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-arrow-left me-2"></i> Back to session
            details
          </button>
        </div>

        <div className="row g-4">
          {/* LEFT SIDE */}
          <div className="col-lg-7">
            <div className="session-card p-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="coach-avatar">{session.coachInitials}</div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <h5 className="mb-1">
                      Session with {session.coachName}
                    </h5>
                    <span className="status-badge">{session.status}</span>
                  </div>
                  <p className="text-muted small mb-0">{session.date}</p>
                  <p className="text-muted small mb-0">{session.time}</p>
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-6 mb-3">
                  <h6 className="fw-semibold">Session Type</h6>
                  <p>{session.type}</p>
                </div>
                <div className="col-6 mb-3">
                  <h6 className="fw-semibold">Session Fee</h6>
                  <p>{session.fee}</p>
                </div>
                <div className="col-6 mb-3">
                  <h6 className="fw-semibold">Booked On</h6>
                  <p>{session.bookedOn}</p>
                </div>
                <div className="col-6 mb-3">
                  <h6 className="fw-semibold">Session Goal</h6>
                  <p>{session.goal}</p>
                </div>
              </div>

              <hr />

              <div className="mt-3">
                <h6 className="fw-bold mb-3">Your Coach</h6>
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="coach-avatar">{session.coachInitials}</div>
                  <div>
                    <h6 className="mb-0">{session.coachName}</h6>
                    <p className="text-muted small mb-1">
                      <i className="fa-solid fa-star text-warning me-1"></i>
                      {session.coachRating}
                    </p>
                    <p className="text-muted small mb-0">
                      {session.coachLocation}
                    </p>
                    <p className="text-muted small mb-0">
                      {session.coachLanguages}
                    </p>
                  </div>
                </div>
                <p className="text-secondary small mt-2">{session.coachBio}</p>

                <div className="d-flex flex-wrap gap-2 mt-2">
                  {session.coachExpertise.map((exp, i) => (
                    <span key={i} className="expertise-badge">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-5">
            <div className="session-card p-4 mb-4">
              <h6 className="fw-bold mb-3">Session Actions</h6>
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-dark w-100">
                  <i className="fa-solid fa-video me-2"></i> Join Session
                </button>
                <button className="btn btn-outline-secondary w-100">
                  <i className="fa-solid fa-link me-2"></i> Copy Meeting Link
                </button>
                <button className="btn btn-outline-primary w-100">
                  <i className="fa-solid fa-rotate-right me-2"></i> Reschedule
                </button>
                <button className="btn btn-danger w-100">
                  <i className="fa-solid fa-xmark me-2"></i> Cancel Session
                </button>
              </div>
            </div>

            <div className="session-card p-4 mb-4">
              <h6 className="fw-bold mb-3">Session Info</h6>
              <div className="small">
                <p className="mb-2">
                  <span className="fw-semibold">Session ID:</span>{" "}
                  {session.sessionId}
                </p>
                <p className="mb-2">
                  <span className="fw-semibold">Duration:</span>{" "}
                  {session.duration}
                </p>
                <p className="mb-2">
                  <span className="fw-semibold">Session Type:</span>{" "}
                  {session.type}
                </p>
                <p className="mb-0">
                  <span className="fw-semibold">Total Cost:</span> {session.fee}
                </p>
              </div>
            </div>

            <div className="session-card p-4">
              <h6 className="fw-bold mb-2">Need Help?</h6>
              <p className="text-secondary small mb-3">
                Have questions about your session? Our support team is here to
                help.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-outline-dark w-100">
                  <i className="fa-solid fa-headset me-2"></i> Contact Support
                </button>
                <button className="btn btn-outline-dark w-100">
                  <i className="fa-solid fa-envelope me-2"></i> Email Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
