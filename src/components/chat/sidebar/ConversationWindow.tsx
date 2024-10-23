// src/components/ConversationWindow.tsx
import React from 'react';
import MessageBubble from './MessageBubble';
import classes from './ConversationWindow.module.scss';

interface Message {
  text: string;
  time: string;
}

const messages: Message[] = [
  { text: 'Hello!', time: '10:00 AM' },
  { text: 'Hi there!', time: '10:01 AM' },
  { text: 'How are you?', time: '10:02 AM' },
];

const ConversationWindow: React.FC = () => (
  <div className={classes.conversationWindow}>
    {messages.map((msg, index) => (
      <MessageBubble key={index} text={msg.text} time={msg.time} />
    ))}
  </div>
);

export default ConversationWindow;
