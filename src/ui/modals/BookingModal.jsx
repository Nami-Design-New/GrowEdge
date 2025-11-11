import { useState } from "react";
import { Modal } from "react-bootstrap";
import InputField from "../../ui/forms/InputField";
import SelectField from "../forms/SelectField";
import SessionDurationDate from "../forms/SessionDurationDate";

export default function BookingModal({ show, setShow }) {
    const [selectedDuration, setSelectedDuration] = useState("60");
    const [selectedTime, setSelectedTime] = useState(null);
    const [sessionGoal, setSessionGoal] = useState("Skill Development Planning");
    const [notes, setNotes] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const handleConfirm = (e) => {
        e.preventDefault();
        setShow(false);
    };

    const times = [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
    ];

    return (
        <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Book Your Session</Modal.Title>
            </Modal.Header>

            <Modal.Body className="m-3">
                <p className="text-muted mb-3">
                    Schedule your coaching session with <strong>Michael Chen</strong>
                </p>

                <form onSubmit={handleConfirm} className="form_ui">
                    {/* ===== Duration & Date ===== */}
                    <SessionDurationDate
                        selectedDuration={selectedDuration}
                        setSelectedDuration={setSelectedDuration}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                    />

                    {/* ===== Time Selection ===== */}
                    <div className="mb-4">
                        <h6>Select Time</h6>
                        <div className="d-flex gap-2 flex-wrap mt-2">
                            {times.map((time) => (
                                <button
                                    key={time}
                                    type="button"
                                    className={`btn ${selectedTime === time ? "btn-dark" : "btn-outline-secondary"
                                        }`}
                                    onClick={() => setSelectedTime(time)}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ===== Session Goal ===== */}
                    <div className="mb-4">
                        <SelectField
                            label="Session Goal"
                            defaultSelect="Choose your goal"
                            options={[
                                { value: "Skill Development Planning", name: "Skill Development Planning" },
                                { value: "Career Transition Guidance", name: "Career Transition Guidance" },
                                { value: "Interview Preparation", name: "Interview Preparation" },
                                { value: "Leadership Coaching", name: "Leadership Coaching" },
                            ]}
                            value={sessionGoal}
                            onChange={(e) => setSessionGoal(e.target.value)}
                        />
                    </div>

                    {/* ===== Additional Notes ===== */}
                    <div className="mb-4">
                        <InputField
                            as="textarea"
                            rows={3}
                            label="Additional Notes (Optional)"
                            placeholder="Share any specific topics, questions, or goals you'd like to discuss..."
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>

                    {/* ===== Confirm Button ===== */}
                    <div className="text-center">
                         <button className="btn btn-dark px-5 py-2"
                          onClick={handleConfirm}> Confirm Booking - ${selectedDuration === "30" ? "75" : "150"}
                         </button> </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}
