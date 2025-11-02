import ClientCard from "./ClientCard";

export default function ActiveClients({ clients }) {
  const activeClients = clients.filter((client) => client.status === "Active");

  return (
    <div className="active-clients">
      <h6 className="fw-bold mb-3">Active Clients</h6>

      <div className="row">
        {activeClients.length > 0 ? (
          activeClients.map((client, i) => (
            <div className="col-lg-6 mb-4" key={i}>
              <ClientCard client={client} />
            </div>
          ))
        ) : (
          <p className="text-muted text-center mt-3">
            No active clients found.
          </p>
        )}
      </div>
    </div>
  );
}
