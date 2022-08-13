import React from 'react';
import styled from "styled-components";

const StyledTimeBlock = styled.div`
  color: #bebebe;
  margin-right: 0.5rem;
  margin-top: ${props => props.marginTop || '0'};
  align-self: ${props => props.alignSelf || 'start'};
`

const TimeBlock = (props) => {


    return (
        <StyledTimeBlock {...props}>
            {props.item}
        </StyledTimeBlock>
    );
};

export default TimeBlock;
