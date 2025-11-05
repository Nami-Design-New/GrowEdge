export default function MessageBubble({ message, onDelete }) {
  return (
    <div
      className={`message-bubble ${message.isUser ? "user" : "other"}`}
    >
      {message.image && (
        <img
          src={message.image}
          alt="attachment"
          className="attached-image"
        />
      )}

      {message.file && (
        <div className="attached-file">
          <i className="fa-solid fa-paperclip"></i> {message.file}
        </div>
      )}

      {message.text && <p>{message.text}</p>}

      <span className="time">{message.time}</span>

      <i
        className="fa-solid fa-trash delete-icon"
        title="Delete Message"
        onClick={onDelete}
      ></i>
    </div>
  );
}
