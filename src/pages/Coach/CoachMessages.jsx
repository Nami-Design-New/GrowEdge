import { useState } from "react";
import Sidebar from "../../components/CoachDashboard/CoachSidebar";
import ChatSidebar from "../../components/CoachDashboard/Messages/ChatSidebar";
import ChatWindow from "../../components/CoachDashboard/Messages/ChatWindow";

export default function CoachMessages() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  //  all chats
  const allConversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      message: "Great progress on your resume!",
      online: true,
      pinned: true,
      unread: false,
      initials: "SJ",
      messages: [
        {
          sender: "Sarah Johnson",
          time: "07:09 AM",
          text: "Hi! I've reviewed your profile and I'm excited to work with you.",
          isUser: false,
        },
        {
          sender: "You",
          time: "08:24 AM",
          text: "Thank you! I'm looking forward to improving my skills.",
          isUser: true,
        },
      ],
    },
    {
      id: 2,
      name: "Tech Innovators",
      message: "Please send your updated portfolio.",
      online: false,
      pinned: false,
      unread: true,
      initials: "TI",
      messages: [
        {
          sender: "Tech Innovators",
          time: "11:00 AM",
          text: "Please send your updated portfolio.",
          isUser: false,
        },
      ],
    },
    {
      id: 3,
      name: "MVP Labs Team",
      message: "Welcome to the MVP Labs program!",
      online: true,
      pinned: false,
      unread: false,
      initials: "MLT",
      messages: [
        {
          sender: "MVP Labs Team",
          time: "09:45 AM",
          text: "Welcome to our community!",
          isUser: false,
        },
      ],
    },
  ];

  const [selectedChat, setSelectedChat] = useState(allConversations[0]);

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="messg-content">
        <div className="overview-header p-0 p-md-4 mb-md-0">
          <h5>Messages</h5>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div className="messages-page d-flex" style={{ height: "100vh" }}>
          <ChatSidebar
            conversations={allConversations}
            onSelectChat={(chat) => setSelectedChat(chat)}
            selectedChatId={selectedChat?.id}
          />
          <ChatWindow selectedChat={selectedChat} />
        </div>
      </div>
    </div>
  );
}
