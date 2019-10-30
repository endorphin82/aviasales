import React from "react";

const Ticket = ({
                  ticket: {
                    origin, origin_name, destination, destination_name,
                    departure_date, departure_time, arrival_date, arrival_time,
                    carrier, stops, price
                  }, ind
                }) => {
  return (
    <>
      <li>
        <h2>Ticket {ind}</h2>
        <p>
          {origin}
        </p>
        <p>
          {origin_name}
        </p>
        <p>
          {destination}
        </p>
        <p>
          {destination_name}
        </p>
        <p>
          {departure_date}
        </p>
        <p>
          {departure_time}
        </p>
        <p>
          {arrival_date}
        </p>
        <p>
          {arrival_time}
        </p>
        <p>
          {carrier}
        </p>
        <p>
          {stops}
        </p>
        <p>
          {price}
        </p>
      </li>
    </>
  );
};

export default Ticket;