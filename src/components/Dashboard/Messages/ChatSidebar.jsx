import { useState } from "react";

export default function ChatSidebar() {
  const allConversations = [
    { id: 1, name: "Sarah Johnson", message: "Great progress!", active: true, online: true, pinned: true, unread: false, initials: "SJ" },
    { id: 2, name: "Tech Innovators", message: "Thank you for considering my app.", active: false, online: false, pinned: false, unread: true, initials: "TI" },
    { id: 3, name: "MVP Labs Team", message: "Welcome to the MVP Labs program!", active: false, online: true, pinned: false, unread: false, initials: "MLT" },
  ];

  const [tab, setTab] = useState("All");
  const [conversations, setConversations] = useState(allConversations);

  const filtered = conversations.filter((c) => {
    if (tab === "All") return true;
    if (tab === "Unread") return c.unread;
    if (tab === "Pinned") return c.pinned;
    return true;
  });

  return (
    <div className="chat-sidebar">
     

      {/* ===== Search ===== */}
      <div className="header">
        <div className="search mt-2">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search conversations..." />
        </div>
      </div>
 {/* ===== Tabs ===== */}
      <div className="tabs d-flex justify-content-around border-bottom p-2">
        {["All", "Unread", "Pinned"].map((t) => (
          <button
            key={t}
            className={`tab-btn ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      {/* ===== Conversations ===== */}
      <div className="conversations">
        {filtered.map((c) => (
          <div
            key={c.id}
            className={`conversation ${c.active ? "active" : ""}`}
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
