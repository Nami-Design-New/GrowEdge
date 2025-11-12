import { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";

export default function ChatLayout() {
  // all chats
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
      message: "Thank you for considering my application.",
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
    <div className="chat-layout" style={{ display: "flex", height: "100vh" }}>
      <ChatSidebar
        conversations={allConversations}
        onSelectChat={(chat) => setSelectedChat(chat)}
        selectedChatId={selectedChat?.id}
      />
      <ChatWindow selectedChat={selectedChat} />
    </div>
  );
}
