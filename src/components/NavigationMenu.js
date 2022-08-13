import React, {useState} from 'react';
import styled from "styled-components";
import Flex from "./Flex";
import DayCard from "./DayCard";
import Button from "./Button";
import ArrowBackIcon from "./ArrowBackIcon";
import ArrowNextIcon from "./ArrowNextIcon";
import Grid from "./Grid";

const StyledNavigationMenu = styled.nav`
  background-color: #dadada;
`

const NavigationMenu = ({days, month, changePage}) => {

    const [daysState, setDaysState] = useState([...days])

    return (
        <StyledNavigationMenu id={'navMenu'}>
            <Flex direction={'column'} paddingTop={'1rem'}>
                <Grid columns={'repeat(8, 1fr)'}>
                    <>
                        <div/>
                        {
                            daysState.map((item, index) =>
                                <DayCard item={item} key={index} place={index}/>
                            )
                        }
                    </>
                </Grid>
                <Grid columns={'1fr 7fr'}>
                    <div/>
                    <Grid columns={'1fr 6fr 1fr'} justifyItems={'center'} paddingTop={'1rem'} paddingBottom={'1rem'} paddingLeft={'0.5rem'} paddingRight={'0.5rem'}>
                        <Button onClick={() => changePage('pred')}>
                            <ArrowBackIcon/>
                        </Button>
                        <p>{month.name + ' ' + days[0].date.getFullYear()}</p>
                        <Button onClick={() => changePage('next')}>
                            <ArrowNextIcon/>
                        </Button>
                    </Grid>
                </Grid>
            </Flex>
        </StyledNavigationMenu>
    );
};

export default NavigationMenu;
