import MessageBubble from "./MessageBubble";

export default function ChatWindow() {
  const messages = [
    { sender: "Sarah Johnson", time: "07:09 AM", text: "Hi! I've reviewed your profile and I'm excited to work with you on your career goals.", isUser: false },
    { sender: "You", time: "08:24 AM", text: "Thank you! I'm looking forward to improving my interview skills and updating my resume.", isUser: true },
    { sender: "Sarah Johnson", time: "08:39 AM", text: "I've attached a resume template and some interview preparation materials. Take a look and let me know if you have any questions.", isUser: false },
    { sender: "Sarah Johnson", time: "08:54 AM", text: "Great progress on your resume! Let’s schedule a mock interview for next week.", isUser: false },
  ];

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="user">
          <div className="avatar">SJ</div>
          <div>
            <h6>Sarah Johnson</h6>
            <span className="status online">Online</span>
          </div>
        </div>
        <div className="actions">
          <i className="fa-solid fa-phone"></i>
          <i className="fa-solid fa-video"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>

      <div className="chat-body">
        {messages.map((m, index) => (
          <MessageBubble key={index} message={m} />
        ))}
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <div className="icons">
          <i className="fa-solid fa-paperclip"></i>
          <i className="fa-regular fa-face-smile"></i>
          <i className="fa-solid fa-paper-plane send"></i>
        </div>
      </div>
    </div>
  );
}
