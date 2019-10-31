import React from "react";
import styled from "styled-components";
import { IconAirPlane } from "../../../theme/globalStyle";

const TicketDesktop = styled.li` 
list-style: none;
margin: 20px;
  background: ${props => props.theme.backgroundPaper};
  width: 100%;
  max-width: 729px;
  min-height: 251px;
  box-shadow: 0 1px 5px rgba(0,0,0,.15);
  border-radius: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  padding-right: 20px;
`;

const Ticket = ({
                  ticket: {
                    origin, origin_name, destination, destination_name,
                    departure_date, departure_time, arrival_date, arrival_time,
                    carrier, stops, price
                  }, ind
                }) => {
  return (
    <>
      <TicketDesktop>
          <h2>Ticket {ind}</h2>
          <IconAirPlane/>
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
      </TicketDesktop>
    </>
  );
};

export default Ticket;