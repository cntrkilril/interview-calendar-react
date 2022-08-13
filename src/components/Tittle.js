import React from 'react';
import styled from "styled-components";

const StyledTitle = styled.p`
    font-size: 18px;
`


const Title = (props) => {

    return (
        <StyledTitle {...props} />
    );
};

export default Title;
