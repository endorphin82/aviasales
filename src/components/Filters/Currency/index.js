import React, {useState} from 'react';
import styled, {ThemeProvider} from "styled-components";
import { themeDefaultColors } from "../../../theme/globalStyle";

const Rg = styled.div`
  -webkit-box-sizing:border-box;
  box-sizing:border-box;
  padding:0;
  display:inline-block;
  position:relative;
  margin:0;
  font-size:14px;
  font-variant:tabular-nums;
  line-height:unset;
  list-style:none;
  color: ${props => props.theme.currencyActiveBgColor}
`;
const RbLabelWrap = styled.label`
  -webkit-transition:color .3s,background .3s,border-color .3s;
  background: ${props => props.checked ? props.theme.currencyActiveBgColor : props.theme.currencyBgColor};
  color: ${props => props.checked ? props.theme.colorTextButton : props.theme.currencyActiveBgColor};
  border:1px solid ${props => props.theme.decorateColorRectangle};
  border-left:0;
  border-top-width:1.02px;
  cursor:pointer;
  height:32px;
  text-transform: uppercase;
  line-height:30px;
  display:inline-block;
  margin:0;
  padding:0 15px;
  position:relative;
  transition:color .3s,background .3s,border-color .3s;
  &:hover {
    background-color:${props => props.checked ? props.theme.currencyActiveBgColor : props.theme.currencyHoverBgColor};
    border-color:${props => props.theme.transActiveBorderColor};
    color: ${props => props.checked ? props.theme.colorTextButton : props.theme.currencyActiveBgColor};
    position:relative;
  }
  &:first-child {
    border-radius:4px 0 0 4px;
  }
  &:last-child {
    border-radius:0 4px 4px 0;
  }
`;
const RbSpan = styled.span`
    display:block;
    height:0;
    margin-left:0;
    width:0;
`;
const RadioButton = styled.input`
    display:block;
    margin-left:0;
    border-radius:0 4px 4px 0;
    height:0;
    opacity:0;
    z-index:1;
    pointer-events:none;
    width:0;
`;

function Currency() {
  const [select, setSelect] = useState("usd");
  const handleSelectChange = event => {
    const value = event.target.value;
    setSelect(value);
  };

  return (
    <ThemeProvider theme={themeDefaultColors}>
      <Rg>
        <RbLabelWrap
          checked={select === "rub"}
        >
          <RbSpan>
            <RadioButton
              type="radio"
              name="radio"
              value="rub"
              checked={select === "rub"}
              onChange={event => handleSelectChange(event)}
            />
          </RbSpan>
          rub
        </RbLabelWrap>
        <RbLabelWrap
          checked={select === "usd"}
        >
          <RbSpan>
            <RadioButton
              type="radio"
              name="radio"
              value="usd"
              checked={select === "usd"}
              onChange={event => handleSelectChange(event)}
            />
          </RbSpan>
          usd
        </RbLabelWrap>
        <RbLabelWrap
          checked={select === "eur"}
        >
          <RbSpan>
            <RadioButton
              type="radio"
              name="radio"
              value="eur"
              checked={select === "eur"}
              onChange={event => handleSelectChange(event)}
            />
          </RbSpan>
          eur
        </RbLabelWrap>
      </Rg>
    </ThemeProvider>
  );
}

export default Currency;
