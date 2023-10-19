// components/App.js
import React, {  useState } from "react";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  const [tickets, setTickets] = useState([]);

  

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <KanbanBoard tickets={tickets} />
    </div>
  );
}

export default App;