// src/components/MessageBubble.tsx
import React from 'react';
import classes from './MessageBubble.module.scss';

interface MessageBubbleProps {
  text: string;
  time: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ text, time }) => (
  <div className={classes.messageBubble}>
    <p>{text}</p>
    <small>{time}</small>
  </div>
);

export default MessageBubble;
