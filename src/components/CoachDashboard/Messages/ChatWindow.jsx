import { useEffect, useState } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ selectedChat }) {
  const [messages, setMessages] = useState(selectedChat?.messages || []);
  const [inputValue, setInputValue] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMessages(selectedChat?.messages || []);
  }, [selectedChat]);

  const handleMenu = () => setMenuOpen((prev) => !prev);

  const handleAttach = (e) => {
    const file = e.target.files[0];
    if (file) setAttachment(file);
  };

  const handleSend = () => {
    if (!inputValue.trim() && !attachment) return;

    let newMsg = {
      sender: "You",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      text: "",
      isUser: true,
    };

    if (attachment) {
      const fileType = attachment.type;
      if (fileType.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(attachment);
        newMsg = { ...newMsg, image: imageUrl };
      } else {
        newMsg = { ...newMsg, file: attachment.name };
      }
    } else {
      newMsg.text = inputValue;
    }

    setMessages((prev) => [...prev, newMsg]);
    setInputValue("");
    setAttachment(null);
  };

  // delete messg
  const handleDeleteMessage = (indexToDelete) => {
    const updated = messages.filter((_, i) => i !== indexToDelete);
    setMessages(updated);
  };

  if (!selectedChat) {
    return (
      <div className="chat-window empty">
        <p>Select a conversation to start chatting</p>
      </div>
    );
  }

  return (
    <div className="chat-window">
      {/* ===== Header ===== */}
      <div className="chat-header">
        <div className="user">
          <div className="avatar">{selectedChat.initials}</div>
          <div>
            <h6>{selectedChat.name}</h6>
            <span
              className={`status ${selectedChat.online ? "online" : "offline"}`}
            >
              {selectedChat.online ? "Online" : "Offline"}
            </span>
          </div>
        </div>

        <div className="actions">
          <div className="menu-wrapper">
            <i
              className="fa-solid fa-ellipsis-vertical"
              title="More Options"
              onClick={handleMenu}
            ></i>
            {menuOpen && (
              <div className="dropdown-menu">
                <button>
                  <i className="fa-regular fa-user"></i> View Profile
                </button>
                <button>
                  <i className="fa-solid fa-ban"></i> Block User
                </button>
                <button>
                  <i className="fa-regular fa-trash-can"></i> Delete Chat
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ===== Messages ===== */}
      <div className="chat-body">
        {(messages || []).map((m, i) => (
          <MessageBubble
            key={i}
            message={m}
            onDelete={() => handleDeleteMessage(i)} 
          />
        ))}
      </div>

      {/* ===== Input Section ===== */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {attachment && (
          <div className="attached-file">
            <i className="fa-solid fa-paperclip"></i> {attachment.name}
          </div>
        )}

        <div className="icons">
          <label htmlFor="fileInput">
            <i className="fa-solid fa-paperclip" title="Attach File"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={handleAttach}
          />

          <i
            className="fa-solid fa-paper-plane send"
            title="Send Message"
            onClick={handleSend}
          ></i>
        </div>
      </div>
    </div>
  );
}
