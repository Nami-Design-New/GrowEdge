// import React from "react";

export default function ProgressClients({ clients }) {
  const progressClients = clients.filter((client) => client.progress < 100);

  return (
    <div className="progress-overview mt-4">
      <h6 className="fw-bold mb-1">Client Progress Overview</h6>
      <p className="text-muted mb-4">
        Track the progress of all your clients
      </p>

      {progressClients.length > 0 ? (
        progressClients.map((client, i) => (
          <div className="client-progress-card mb-3" key={i}>
            <div className="client-header">
              <div className="left-header">
                <div className="avatar avatar-small">
                  {client.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="info">
                  <h6>{client.name}</h6>
                  <p>{client.careerGoal}</p>
                </div>
              </div>

              <div className="progress-percentage">{client.progress}%</div>
            </div>

            <div className="progress-bar">
              <div
                className="fill"
                style={{ width: `${client.progress}%` }}
              ></div>
            </div>

            <div className="session-info mt-1 mb-2 text-muted small">
              {client.sessions ? `${client.sessions - 2}/${client.sessions} sessions` : ""}
            </div>

            <p className="goal mb-0">
              <strong>Goal:</strong> {client.goal ||
                "Transition from marketing to product management within 6 months"}
            </p>
          </div>
        ))
      ) : (
        <p className="text-muted text-center">No clients in progress.</p>
      )}
    </div>
  );
}
