import React from "react";
import styled from "styled-components";

export const themeDefaultColors = {
  backgroundPage: "#F2F2F2",
  backgroundPaper: "#FFFFFF",
  paperBorderColor: "#e4e7e8",
  backgroundButton: "#FF6D00",
  colorTextButton: "#FFFFFF",
  backgroundButtonHover: "#FF8124",
  buttonShadowColor: "#D64D08",
  primaryTextColor: "#4A4A4A",
  secondaryTextColor: "#8B9497",
  currencyBgColor: "#FFFFFF",
  currencyActiveBgColor: "#2196F3",
  currencyHoverBgColor: "#F2FCFF",
  transNoActiveBorderColor: "#D2D5D6",
  transActiveBorderColor: "#2196F3",
  decorateColorRectangle: "#D2D5D6",
  decorateColorRectangleActive: "#000000"
};

export const MainWrapper = styled.div`
  background-color: ${props => props.theme.backgroundPage};
`;

const Icon = styled.svg`
  flex: none;
  margin-left: 3px;
  margin-right: 3px;
  vertical-align: bottom;
  fill: ${props => props.theme.decorateColorRectangle};
    :hover {
    fill: ${props => props.theme.decorateColorRectangleActive};
`;

export const IconAirPlane = () => {
  return (
    <Icon width="13" height="13" viewBox="0 0 13 13">
      <path
        d="M3.9 13H5.2L8.45 7.52632L12.025 7.52632C12.5645 7.52632 13 7.06789
        13 6.5C13 5.93211 12.5645 5.47368 12.025 5.47368L8.45 5.47368L5.2 0L3.9
        0L5.525 5.47368H1.95L0.975 4.10526L0 4.10526L0.65 6.5L0 8.89474H0.975L1.95
        7.52632H5.525L3.9 13Z"/>
    </Icon>);
};
