import InputField from "../../ui/forms/InputField";

export default function SessionDurationDate({
  selectedDuration,
  setSelectedDuration,
  selectedDate,
  setSelectedDate,
}) {
  return (
    <>
      {/* ===== Duration Selection ===== */}
      <div className="mb-4">
        <h6>Session Duration</h6>
        <div className="d-flex gap-2 flex-wrap mt-2">
          <button
            type="button"
            className={`btn ${
              selectedDuration === "30" ? "btn-dark" : "btn-outline-secondary"
            }`}
            onClick={() => setSelectedDuration("30")}
          >
            30 Minutes - $75
          </button>
          <button
            type="button"
            className={`btn ${
              selectedDuration === "60" ? "btn-dark" : "btn-outline-secondary"
            }`}
            onClick={() => setSelectedDuration("60")}
          >
            60 Minutes - $150
          </button>
        </div>
      </div>

      {/* ===== Date Selection ===== */}
      <div className="mb-4">
        <InputField
          label="Select Date"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
    </>
  );
}
