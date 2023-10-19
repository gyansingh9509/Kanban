// api.js

// Define the base URL for your API
const BASE_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

// Function to fetch tickets from the API
export const fetchTickets = () => {
  return fetch(`${BASE_URL}/tickets`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (Array.isArray(data)) {
        return data;
      } else {
        throw new Error('Invalid data format. Expected an array.');
      }
    });
};

// You can add more API functions for other endpoints as needed
// For example, if you have an endpoint to create a new ticket:
export const createTicket = (ticketData) => {
  return fetch(`${BASE_URL}/tickets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ticketData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Handle the response data as needed
      return data;
    });
};

// You can define other API functions (e.g., update, delete) as required

