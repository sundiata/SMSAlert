import React from "react";
import "./ChatHeader.scss"; // Assuming we will style it using SCSS

interface ChatHeaderProps {
  name: string;
  profilePicture: string;
  status: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ name, profilePicture, status }) => {
  return (
    <header className="chat-header">
      <div className="chat-header__left">
        <img
          src={profilePicture}
          alt={`${name}'s profile`}
          className="chat-header__profile-picture"
        />
        <div className="chat-header__info">
          <h3 className="chat-header__name">{name}</h3>
          <p className="chat-header__status">{status}</p>
        </div>
      </div>
      <div className="chat-header__right">
        <button className="chat-header__icon">
          <i className="fas fa-video"></i> {/* Example for video call */}
        </button>
        <button className="chat-header__icon">
          <i className="fas fa-phone"></i> {/* Example for voice call */}
        </button>
        <button className="chat-header__icon">
          <i className="fas fa-ellipsis-v"></i> {/* Example for options */}
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;
