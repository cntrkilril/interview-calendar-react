import React from 'react';
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justifyContent || 'stretch'};
  align-items: ${props => props.alignItems || 'stretch'};
  margin: ${props => props.margin || '0'};
  margin-top: ${props => props.marginTop || '0'};
  padding-left: ${props => props.paddingLeft || '0'};
  padding-right: ${props => props.paddingRight || '0'};
  padding-top: ${props => props.paddingTop || '0'};
  padding-bottom: ${props => props.paddingBottom || '0'};
  max-width: ${props => props.maxWidth || 'none'};
  min-width: ${props => props.minWidth || 'none'};
  width: ${props => props.width || '100%'};
  border-left: ${props => props.borderLeft || 'none'};
  border-right: ${props => props.borderRight || 'none'};
  @media ${props => props.theme.media.small} {
    width: 100%;
    max-width: none;
  }
`

const Flex = (props) => {

    return (
        <StyledFlex {...props}/>
    );
};

export default Flex;
