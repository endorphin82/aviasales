import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ticket from "./Ticket";
import { loadAllTickets } from "../../AC";

const Tickets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllTickets());
  }, [dispatch]);
  const { tickets } = useSelector(
    state => ({ tickets: state.tickets.tickets.sort((a, b) => (a.stops > b.stops) ? 1 : ((b.stops > a.stops) ? -1 : 0)) })
  );
  return (
    <>
      <h2>Tickets</h2>
      <ul>
        {
          tickets.map((ticket, ind) => {
            return <Ticket key={ind} ind={ind} ticket={ticket}/>;
          })
        }
      </ul>
    </>
  );
};

export default Tickets;