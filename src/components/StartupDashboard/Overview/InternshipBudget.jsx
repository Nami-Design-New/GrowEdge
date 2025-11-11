export default function InternshipBudget() {
  const budget = {
    total: "$30,000",
    spent: "$22,500",
    remaining: "$7,500",
    percentSpent: 75, 
  };

  return (
    <div className="col-lg-8">
      <div className="budget-card card-box">
        {/* Header */}
        <div className="header">
          <i className="fa-solid fa-wallet"></i>
          <div>
            <h6>Internship Budget</h6>
            <p>Monthly budget allocation and spending</p>
          </div>
        </div>

        {/* Budget Info */}
        <div className="budget-info">
          <div className="budget-item">
            <span>Total Budget</span>
            <strong>{budget.total}</strong>
          </div>
          <div className="budget-item">
            <span>Currently Spent</span>
            <strong>{budget.spent}</strong>
          </div>
          <div className="budget-item">
            <span>Remaining</span>
            <strong>{budget.remaining}</strong>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-wrapper mt-3">
          <div className="progress-bar-fill" style={{ width: `${budget.percentSpent}%` }}></div>
        </div>
        <p className="percent-text mt-1">{budget.percentSpent}% of budget utilized</p>
      </div>
    </div>
  );
}
