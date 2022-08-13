import React, {useState} from 'react';
import styled, {css} from "styled-components";

const StyledButtonDay = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  ${props => props.activated && css`
    background: red;
    color: white;
  `}
`

const ButtonDay = (props) => {

    const [day, setDay] = useState(props.item)

    return (
        <StyledButtonDay {...props} onClick={() => props.updateCurrent()}>
            {day.getDate()}
        </StyledButtonDay>
    );
};

export default ButtonDay;
