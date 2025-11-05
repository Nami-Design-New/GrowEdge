export default function ChatSidebar({ conversations = [], onSelectChat, selectedChatId }) {

  return (
    <div className="chat-sidebar">
      <div className="header">
        <div className="search mt-2">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search conversations..." />
        </div>
      </div>

      <div className="conversations">
        {(conversations || []).map((c) => (
          <div
            key={c.id}
            className={`conversation ${selectedChatId === c.id ? "active" : ""}`}
            onClick={() => onSelectChat(c)}
          >
            <div className="avatar">{c.initials}</div>
            <div className="info">
              <h6>{c.name}</h6>
              <p>{c.message}</p>
            </div>
            {c.online && <span className="status online"></span>}
          </div>
        ))}
      </div>
    </div>
  );
}
