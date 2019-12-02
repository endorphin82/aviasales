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
  display: flex;
  position: relative;
  padding-right: 20px;
`;

const TicketPriceContent = styled.div`
  width: 100px;
  flex-shrink: 0;
  border-right: 1px solid ${props => props.theme.paperBorderColor};
`;

const TicketBuyButton = styled.div`
  //position: absolute;
  align-self: flex-end;
  margin: 20px;
  cursor: pointer;
  background-color: ${props => props.theme.backgroundButton};
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1), 0px 1px 0px ${props => props.theme.buttonShadowColor};
  border-radius: 5px;
  :hover{
    background-color: ${props => props.theme.backgroundButtonHover};
  }
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
        <TicketPriceContent>
          <TicketBuyButton onClick={() => alert('buy ticket')}>
            <p>
            {price}

            </p>
          </TicketBuyButton>

        </TicketPriceContent>
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
          {stops} {pluralize(stops, "пересадка", "пересадки", "пересадок")}
        </p>

      </TicketDesktop>
    </>
  );
};

export default Ticket;