// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// export default function CalendarView() {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const sessions = [
//     {
//       id: 1,
//       clientName: "Ahmed Ali",
//       date: "2025-11-10",
//       time: "10:00 AM",
//       topic: "Strength Training",
//       status: "Upcoming",
//     },
//     {
//       id: 2,
//       clientName: "Sara Mohamed",
//       date: "2025-11-12",
//       time: "04:00 PM",
//       topic: "Nutrition Guidance",
//       status: "Upcoming",
//     },
//     {
//       id: 3,
//       clientName: "Alex Thompson",
//       date: "2025-11-03",
//       time: "3:00 PM",
//       topic: "Career Strategy",
//       status: "Completed",
//     },
//   ];

//   const selectedSessions = sessions.filter(
//     (s) => new Date(s.date).toDateString() === selectedDate.toDateString()
//   );

//   return (
//     <div className="calendar-view">
//       <div className="calendar-container">
//         <Calendar
//           onChange={setSelectedDate}
//           value={selectedDate}
//           className="custom-calendar"
//         />
//       </div>

//       <div className="session-details">
//         <h6 className="selected-date">
//           Sessions on {selectedDate.toDateString()}
//         </h6>

//         {selectedSessions.length > 0 ? (
//           <div className="session-list">
//             {selectedSessions.map((s) => (
//               <div
//                 key={s.id}
//                 className={`calendar-session-card ${s.status.toLowerCase()}`}
//               >
//                 <h6>{s.topic}</h6>
//                 <p className="client">Client: {s.clientName}</p>
//                 <p className="time">
//                   <i className="fa-regular fa-clock"></i> {s.time}
//                 </p>
//                 <span className={`status-badge ${s.status.toLowerCase()}`}>
//                   {s.status}
//                 </span>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="no-session">No sessions on this date.</p>
//         )}
//       </div>
//     </div>
//   );
// }
export default function CalendarView() {
    <>
    CalendarView
  </>
}