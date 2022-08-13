import React from 'react';
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || 'none'};
  grid-template-rows: ${props => props.rows || 'none'};
  justify-items: ${props => props.justifyItems || 'none'};
  align-items: ${props => props.alignItems || 'none'};
  padding-left: ${props => props.paddingLeft || '0'};
  padding-right: ${props => props.paddingRight || '0'};
  padding-top: ${props => props.paddingTop || '0'};
  padding-bottom: ${props => props.paddingBottom || '0'};
`

const Grid = (props) => {
    return (
        <StyledGrid {...props}/>
    );
};

export default Grid;
