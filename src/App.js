import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadAllTickets } from "./AC";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllTickets());
  }, []);
  const { tickets } = useSelector(
    state => ({ tickets: state.tickets.tickets })
  );
  console.log(tickets);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            tickets.map((ticket, ind) => {
              return <li key={ind}>{ticket.origin_name + " " + ticket.destination_name + " " + ticket.price}</li>;
            })
          }
        </ul>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
