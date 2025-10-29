export default function SessionSummaryCard({ client }) {
  return (
    <div className="card-box">
      <h6 className="fw-bold mb-3">Session Summary</h6>
      <div className="summary small">
        <p><strong>Total Sessions:</strong> {client.totalSessions}</p>
        <p><strong>Completed:</strong> {client.completedSessions}</p>
        <p><strong>Next Session:</strong> {client.nextSession}</p>
        <p><strong>Topic:</strong> {client.nextTopic}</p>
        <p><strong>Last Session:</strong> {client.lastSession}</p>
        <p className="text-secondary small mt-2">{client.lastSummary}</p>
      </div>
    </div>
  );
}
