// Ticket.js

import React from "react";

const Ticket = ({ props }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3 className="ticket-title">{props.tickets.title}</h3>
        <p className="ticket-priority">Priority: {getPriorityLabel(props.tickets.priority)}</p>
      </div>
      <p className="ticket-status">Status: {props.tickets.status}</p>
      <p className="ticket-user">User: {props.tickets.user}</p>
    </div>
  );
};

const getPriorityLabel = (priority) => {
  switch (priority) {
    case 4:
      return "Urgent";
    case 3:
      return "High";
    case 2:
      return "Medium";
    case 1:
      return "Low";
    default:
      return "No priority";
  }
};

export default Ticket;