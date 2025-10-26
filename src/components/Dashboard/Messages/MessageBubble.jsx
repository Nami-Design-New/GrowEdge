export default function MessageBubble({ message }) {
  return (
    <div className={`message-bubble ${message.isUser ? "user" : "other"}`}>
      <p>{message.text}</p>
      <span className="time">{message.time}</span>
    </div>
  );
}
