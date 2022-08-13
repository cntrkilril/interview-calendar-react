import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Flex from "./Flex";
import TimeBlock from "./TimeBlock";
import Grid from "./Grid";
import MainCard from "./MainCard";

const StyledMain = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`

const emptyArrayVert = new Array(25)
for (let i = 0; i < emptyArrayVert.length; i++) {
    emptyArrayVert[i] = `${i % 24 < 10 ? '0' : ''}${i % 24}:00`
}

const emptyArrayHor = new Array(7).fill(0)

const Main = ({interviewHour, focusedInterview, focus}) => {

    const [resize, setResize] = useState(true)

    window.onresize = () => {
        setResize(prev => !prev)
    }

    useEffect(() => {
        document.getElementById('main').style.maxHeight = (window.innerHeight -
            document.getElementById('header').clientHeight -
            document.getElementById('navMenu').clientHeight -
            document.getElementById('footer').clientHeight) + 'px'
    }, [resize])

    return (
        <StyledMain id='main'>
            <Grid rows={'1.5rem repeat(23, 3rem) 1.5rem'} alignItems={'start'} justifyItems={'end'}>
                {
                    emptyArrayVert.map((item, index) =>
                        <>
                            {
                                {
                                    0: <>
                                        <TimeBlock item={item} key={index}/>
                                    </>,
                                    25:
                                        <>
                                            <TimeBlock item={item} key={index}/>
                                        </>
                                }[index] ||
                                <>
                                    <TimeBlock item={item} alignSelf={'center'} key={index}/>
                                </>
                            }
                        </>
                    )
                }
            </Grid>
            {
                emptyArrayHor.map((item, indexDay) =>
                    <>
                        <Flex direction={'column'} key={indexDay}>
                            {
                                emptyArrayVert.map((item, indexHour) =>
                                    (indexHour !== emptyArrayVert.length && indexHour !== emptyArrayVert.length - 1) &&
                                    {
                                        0: <MainCard day={indexDay} hour={indexHour}
                                                     focus={focus.day === indexDay && focus.hour === String(indexHour < 10 ? `0${indexHour}` : indexHour)}
                                                     focusedInterview={focusedInterview} key={indexHour + '' + indexDay}
                                                     borderLeft={'0'}
                                                     active={interviewHour[indexDay].includes(String(indexHour < 10 ? `0${indexHour}` : indexHour))}/>,
                                        6: <MainCard day={indexDay} hour={indexHour}
                                                     focus={focus.day === indexDay && focus.hour === String(indexHour < 10 ? `0${indexHour}` : indexHour)}
                                                     focusedInterview={focusedInterview}
                                                     key={indexHour + '' + indexDay}
                                                     borderRight={'0'}
                                                     active={interviewHour[indexDay].includes(String(indexHour < 10 ? `0${indexHour}` : indexHour))}/>,
                                    }[indexDay] || (indexHour !== emptyArrayVert.length && indexHour !== emptyArrayVert.length - 1) &&
                                    <MainCard day={indexDay} hour={indexHour}
                                              focus={focus.day === indexDay && focus.hour === String(indexHour < 10 ? `0${indexHour}` : indexHour)}
                                              focusedInterview={focusedInterview}
                                              key={indexHour + '' + indexDay}
                                              active={interviewHour[indexDay].includes(String(indexHour < 10 ? `0${indexHour}` : indexHour))}/>
                                )
                            }
                        </Flex>
                    </>
                )
            }
        </StyledMain>
    );
};

export default Main;
