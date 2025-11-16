import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

export default function CalendarSchedule() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Strength Training - Ahmed Ali",
      start: new Date(2025, 10, 13, 10, 0),
      end: new Date(2025, 10, 13, 11, 0),
      type: "upcoming",
    },
    {
      id: 2,
      title: "Nutrition Guidance - Sara Mohamed",
      start: new Date(2025, 10, 20, 14, 0),
      end: new Date(2025, 10, 20, 15, 0),
      type: "upcoming",
    },
    {
      id: 3,
      title: "Career Strategy - Alex Thompson",
      start: new Date(2025, 10, 13, 16, 0),
      end: new Date(2025, 10, 13, 17, 0),
      type: "completed",
    },
  ];

  const eventStyleGetter = (event) => ({
    className: `event-tile ${event.type}`,
  });

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Weekly Schedule</h2>

      <div className="calendar-wrapper">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          className="custom-calendar"
          onSelectEvent={(event) => setSelectedEvent(event)}
          eventPropGetter={eventStyleGetter}
        />
      </div>

      {selectedEvent && (
        <div className="modal-backdrop" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>{selectedEvent.title}</h4>
            <p>
              <strong>Start:</strong> {selectedEvent.start.toLocaleString()}
            </p>
            <p>
              <strong>End:</strong> {selectedEvent.end.toLocaleString()}
            </p>
            <span className={`status ${selectedEvent.type}`}>
              {selectedEvent.type}
            </span>
            <button
              className="close-btn"
              onClick={() => setSelectedEvent(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
