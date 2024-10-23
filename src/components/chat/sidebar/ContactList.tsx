// src/components/ContactList.tsx
import React from 'react';
import classes from './ContactList.module.scss';

interface Contact {
  name: string;
  role: string;
  lastMessageDate: string;
}

const contacts: Contact[] = [
  { name: 'Alice', role: 'Manager', lastMessageDate: '2024-10-22' },
  { name: 'Bob', role: 'Developer', lastMessageDate: '2024-10-22' },
  { name: 'Charlie', role: 'Designer', lastMessageDate: '2024-10-21' },
];

const ContactList: React.FC = () => (
  <div className={classes.contactList}>
    {contacts.map((contact, index) => (
      <div key={index}>
        <h4>{contact.name}</h4>
        <p>{contact.role}</p>
        <small>{contact.lastMessageDate}</small>
      </div>
    ))}
  </div>
);

export default ContactList;
