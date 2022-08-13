import React from 'react';
import styled from "styled-components";

const StyledMainCard = styled.button`
  width: 100%;
  height: 3rem;
  border: 1px solid #dadada;
  border-left: ${props => props.borderLeft || '#dadada 1px solid'};
  border-right: ${props => props.borderRight || '#dadada 1px solid'};
  background: ${props => props.focus ? '#b3bdff' : props.active ? '#e9ecff' : 'white'};
  cursor: pointer;
`

const MainCard = (props) => {

    const focused = () => {
        if (props.active) {
            let data = {
                day: props.day,
                hour: props.hour<10 ? `0${props.hour}` : String(props.hour)
            }
            props.focusedInterview(data)
        }
    }

    return (
        <StyledMainCard {...props} onClick={focused}>
        </StyledMainCard>
    );
};

export default MainCard;
