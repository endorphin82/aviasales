import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ticket from "./Ticket";
import { loadAllTickets } from "../../AC";
import { filtersGetter, ticketsGetter } from "../../selectors";

const Tickets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllTickets());
  }, [dispatch]);
  const { tickets } = useSelector( ticketsGetter );

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