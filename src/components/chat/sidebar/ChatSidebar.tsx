import React from "react";
import "./ChatSidebar.scss"; // Sidebar styles
import { Link } from "react-router-dom";

interface Contact {
  id: number;
  name: string;
  profilePicture: string;
  lastMessage: string;
  lastMessageTime: string;
  online: boolean;
}

interface ChatSidebarProps {
  contacts: Contact[];
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ contacts }) => {
  return (
    <aside className="chat-sidebar">
      <div className="chat-sidebar__header">
        <h2>Your Chats</h2>
        <button className="chat-sidebar__new-chat">
          <i className="fas fa-edit"></i> {/* New chat icon */}
        </button>
      </div>

      <ul className="chat-sidebar__list">
        {contacts.map((contact) => (
          <li key={contact.id} className="chat-sidebar__item">
            <Link to={`/chat/${contact.id}`} className="chat-sidebar__link">
              <img
                src={contact.profilePicture}
                alt={`${contact.name}'s profile`}
                className="chat-sidebar__profile-picture"
              />
              <div className="chat-sidebar__info">
                <h3 className="chat-sidebar__name">{contact.name}</h3>
                <p className="chat-sidebar__last-message">
                  {contact.lastMessage}
                </p>
              </div>
              <div className="chat-sidebar__meta">
                <span className="chat-sidebar__time">{contact.lastMessageTime}</span>
                <span
                  className={`chat-sidebar__status ${
                    contact.online ? "online" : "offline"
                  }`}
                ></span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ChatSidebar;
