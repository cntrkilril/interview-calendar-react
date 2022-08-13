import React, {useRef, useState} from 'react';
import Flex from "./Flex";
import ButtonDay from "./ButtonDay";
import styled, {css} from "styled-components";

const StyledButtonDay = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  ${props => props.item.activated && css`
    background: red;
    color: white;
  `}
`

const DayCard = ({item}) => {

    return (
        <div>
            <Flex direction={"column"} alignItems={"center"}>
                <p style={{fontSize: '12px', marginBottom: '0.5rem'}}>{item.date.toString()[0]}</p>
                <StyledButtonDay item={item}>
                    {item.date.getDate()}
                </StyledButtonDay>
            </Flex>
        </div>
    );
};

export default DayCard;
