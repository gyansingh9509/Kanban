import React, { useState, useEffect } from 'react';
import GroupingOptions from './GroupingOptions';
import SortingOptions from './SortingOptions';
import Ticket from './Ticket';
import { fetchTickets } from '../api/api'; // Import the API functions

const KanbanBoard = (props) => {
  const [tickets, setTickets] = useState([]);
  const [groupedTickets, setGroupedTickets] = useState({});
  const [currentGrouping, setCurrentGrouping] = useState('status');
  const [currentSorting, setCurrentSorting] = useState('priority');

  useEffect(() => {
    fetchTickets()
      .then((data) => {
        if (Array.isArray(data)) {
          setTickets(data);
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    groupTickets();
  }, [tickets, currentGrouping, currentSorting]);

  const groupTickets = () => {
    const groupedByStatus = {};
    const groupedByUser = {};
    const groupedByPriority = {};

    props.tickets.forEach((ticket) => {
      const { status, user, priority } = ticket;

      if (currentGrouping === 'status') {
        if (!groupedByStatus[status]) {
          groupedByStatus[status] = [];
        }
        groupedByStatus[status].push(ticket);
      } else if (currentGrouping === 'user') {
        if (!groupedByUser[user]) {
          groupedByUser[user] = [];
        }
        groupedByUser[user].push(ticket);
      } else if (currentGrouping === 'priority') {
        if (!groupedByPriority[priority]) {
          groupedByPriority[priority] = [];
        }
        groupedByPriority[priority].push(ticket);
      }
    });

    setGroupedTickets({
      status: groupedByStatus,
      user: groupedByUser,
      priority: groupedByPriority,
    });
  };

  const sortTickets = (group) => {
    const sortedTickets = [...group];

    if (currentSorting === 'priority') {
      sortedTickets.sort((a, b) => b.priority - a.priority);
    } else if (currentSorting === 'title') {
      sortedTickets.sort((a, b) => a.title.localeCompare(b.title));
    }

    return sortedTickets;
  };

  const groupedTicketsToDisplay = groupedTickets[currentGrouping] || {};

  return (
    <div className="kanban-board">
      <GroupingOptions currentGrouping={currentGrouping} setCurrentGrouping={setCurrentGrouping} />
      <SortingOptions currentSorting={currentSorting} setCurrentSorting={setCurrentSorting} />

      <div className="board">
        {Object.keys(groupedTicketsToDisplay).map((group) => (
          <div key={group} className="group">
            <h2>{group}</h2>
            {sortTickets(groupedTicketsToDisplay[group]).map((ticket) => (
              <Ticket key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;

