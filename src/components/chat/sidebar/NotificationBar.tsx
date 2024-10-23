// src/components/NotificationBar.tsx
import React from 'react';
import classes from './NotificationBar.module.scss';

const NotificationBar: React.FC = () => (
  <div className={classes.notificationBar}>
    <p>New update (v3.3.0)</p>
  </div>
);

export default NotificationBar;
