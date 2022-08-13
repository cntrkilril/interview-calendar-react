import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  width: ${props => props.width || 'auto'};
  padding-left: ${props => props.paddingLeft || '0'};
  padding-right: ${props => props.paddingRight || '0'};
  padding-top: ${props => props.paddingTop || '0'};
  padding-bottom: ${props => props.paddingBottom || '0'};
  margin-left: ${props => props.marginLeft || '0'};
  margin-right: ${props => props.marginRight || '0'};
  margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  font-size: ${props => props.fontSize || '14px'};
  background: ${props => props.background || 'transparent'};
  color: ${props => props.color || 'red'};
  cursor: pointer;
`

const Button = (props) => {

    return (
        <StyledButton {...props} onClick={props.onClick}/>
    );
};

export default Button;
