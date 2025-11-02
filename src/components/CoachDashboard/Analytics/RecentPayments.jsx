export default function RecentPayments() {
  const payments = [
    {
      name: "Sarah Chen",
      session: "Career Strategy (60min)",
      method: "Credit Card",
      amount: "$150",
      date: "3/18/2024",
      status: "paid",
    },
    {
      name: "David Martinez",
      session: "Interview Prep (45min)",
      method: "PayPal",
      amount: "$120",
      date: "3/17/2024",
      status: "paid",
    },
    {
      name: "Emma Johnson",
      session: "Resume Review (60min)",
      method: "Bank Transfer",
      amount: "$150",
      date: "3/16/2024",
      status: "processing",
    },
    {
      name: "Alex Thompson",
      session: "Leadership Coaching (60min)",
      method: "Credit Card",
      amount: "$150",
      date: "3/15/2024",
      status: "pending",
    },
    {
      name: "Maria Rodriguez",
      session: "Career Strategy (45min)",
      method: "Credit Card",
      amount: "$120",
      date: "3/14/2024",
      status: "paid",
    },
  ];

  return (
    <div className="recent-payments mt-4">
      <h6 className="fw-bold mb-1">Recent Payments</h6>
      <p className="text-muted small mb-3">
        Your latest payment transactions
      </p>

      <div className="payment-list">
        {payments.map((p, i) => (
          <div className="payment-card" key={i}>
            <div className="payment-info">
              <h6 className="name mb-1">{p.name}</h6>
              <p className="session mb-1">{p.session}</p>
              <span className="method text-muted small">{p.method}</span>
            </div>

            <div className="payment-meta text-end">
              <h6 className="amount mb-1">{p.amount}</h6>
              <span className="date small text-muted">{p.date}</span>
              <span className={`status ${p.status}`}>{p.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
