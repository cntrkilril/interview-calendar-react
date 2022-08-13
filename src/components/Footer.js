import React from 'react';
import styled from "styled-components";
import Button from "./Button";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  background-color: #dadada;
`

const Footer = (props) => {

    return (
        <StyledFooter id={'footer'} {...props}>
            <Button onClick={props.todayCurrent}>
                Today
            </Button>
            {
                props.focus.day !== -1 && props.focus.hour !== -1 &&
                <Button onClick={props.deleteInterview}>
                    Delete
                </Button>
            }
        </StyledFooter>
    );
};

export default Footer;
