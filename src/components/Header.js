import React from 'react';
import Flex from "./Flex";
import Title from "./Tittle";
import Button from "./Button";

const Header = ( {addInterview}) => {

    const addInterviewClick = () => {
        const date = prompt('Enter event time: YYYY-MM-DD HH:mm:ss')
        let object = date ? date.split(' ') : ['', '']
        let dateReg = /^\d{4}[-]\d{2}[-]\d{2}$/
        let timeReg = /^\d{2}[:]\d{2}[:]\d{2}$/
        if (dateReg.test(object[0]) && timeReg.test(object[1])) {
            object = {
                date: object[0],
                time: object[1]
            }
            addInterview(object)
        }
    }

    return (
        <Flex id={'header'} paddingTop={"1rem"} paddingBottom={'1rem'} paddingLeft={'1rem'} paddingRight={'1rem'} justifyContent={'space-between'}  alignItems={'center'}>
            <Title>
                Interview Calendar
            </Title>
            <Button fontSize={'24px'} onClick={addInterviewClick}>
                +
            </Button>
        </Flex>
    );
};

export default Header;
