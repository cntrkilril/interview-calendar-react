import Header from "./components/Header";
import styled from "styled-components";
import Flex from "./components/Flex";
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";
import {useEffect, useRef, useState} from "react";
import Main from "./components/Main";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const monthArray = [null,
    {name: 'January', count: 31},
    {name: 'February', count: 28},
    {name: 'March', count: 31},
    {name: 'April', count: 30},
    {name: 'May', count: 31},
    {name: "June", count: 30},
    {name: 'July', count: 31},
    {name: 'August', count: 31},
    {name: 'September', count: 30},
    {name: 'October', count: 31},
    {name: 'November', count: 30},
    {name: 'December', count: 31}
]

const defaultArray = [
    {date: new Date(), activated: false, object: {date: ''}},
    {date: new Date(), activated: false, object: {date: ''}},
    {date: new Date(), activated: false, object: {date: ''}},
    {date: new Date(), activated: false, object: {date: ''}},
    {date: new Date(), activated: false, object: {date: ''}},
    {date: new Date(), activated: false, object: {date: ''}},
    {date: new Date(), activated: false, object: {date: ''}},
]

let defaultArrayHour = [[], [], [], [], [], [], []]

function App() {

    const today = useRef(new Date())
    const [interviewHour, setInterviewHour] = useState([...defaultArrayHour])
    const [focus, setFocus] = useState({day: -1, hour: -1})

    const [interviews, setInterviews] = useState([
        {
            date: '2022-08-12',
            time: '14:55:07'
        },
        {
            date: '2022-08-11',
            time: '12:55:07'
        }])

    useEffect(() => {
        todayCurrent()
    }, [])

    const [days, setDays] = useState([...defaultArray])
    const [month, setMonth] = useState(monthArray[today.current.getMonth() + 1])

    const [currentDay, setCurrentDay] = useState({...days[today.current.getDay() - 1]})

    const changePage = (type) => {
        defaultArray.map((item, index) => {
            if (type === 'next') {
                item.date.setDate(item.date.getDate() + 7)
            } else {
                item.date.setDate(item.date.getDate() - 7)
            }
            if (item.date.getDate() === today.current.getDate() && item.date.getMonth() === today.current.getMonth()
                && item.date.getFullYear() === today.current.getFullYear()) {
                item.activated = true
            } else {
                item.activated = false
            }
            item.object.date = `${item.date.getFullYear()}-${item.date.getMonth() + 1 < 10 ? '0' : ''}${item.date.getMonth() + 1}-${item.date.getDate() < 10 ? '0' : ''}${item.date.getDate()}`
        })
        setDays([...defaultArray])
        setMonth(monthArray[days[0].date.getMonth() + 1])
        updateDay()

    }

    const todayCurrent = () => {
        defaultArray[today.current.getDay() - 1].date = today.current
        defaultArray.map((item, index) => {
            item.date = new Date()
            item.activated = false
            item.date.setDate(item.date.getDate() - (today.current.getDay() - index - 1))
            item.object.date = `${item.date.getFullYear()}-${item.date.getMonth() + 1 < 10 ? '0' : ''}${item.date.getMonth() + 1}-${item.date.getDate() < 10 ? '0' : ''}${item.date.getDate()}`
        })
        defaultArray[today.current.getDay() - 1].activated = true
        setDays([...defaultArray])
        setMonth(monthArray[days[today.current.getDay() - 1].date.getMonth() + 1])
        setCurrentDay({...days[today.current.getDay() - 1]})
        updateDay()
        setFocus({day: -1, hour: -1})
    }

    const addInterview = (data) => {
        let checkOne = true
        interviews.map((interview, index) => {
            if (interview.date === data.date && interview.time === data.time) {
                checkOne = false
            }
        })
        if (checkOne) {
            interviews.push(data)
            setInterviews([...interviews])
            updateDay()
        }
        console.log(interviewHour)
    }

    const updateDay = () => {
        let copyArray = [[], [], [], [], [], [], []]
        interviews.map((interview) => {
            days.map((day, indexDay) => {
                if (day.object.date === interview.date) {
                    let copy = interview.time.split(':')
                    copyArray[indexDay].push(copy[0])
                }
            })
        })
        setInterviewHour([...copyArray])
        setFocus({day: -1, hour: -1})
    }

    const focusedInterview = (data) => {
        setFocus({...data})
    }

    const deleteInterview = () => {
        let copyInterviewHour = [...interviewHour]
        let copyInterviewDay = [...copyInterviewHour[focus.day]]
        copyInterviewDay.map((hour, index) => {
            if (hour === focus.hour) {
                copyInterviewDay.splice(index, 1)
            }
        })
        let copyInterviews = [...interviews]
        copyInterviews.map((interview, index) => {
            let copyInterviewDate = days[focus.day].object.date
            let copyInterviewHour = interview.time[0] + interview.time[1]
            if (interview.date === copyInterviewDate && copyInterviewHour === focus.hour) {
                copyInterviews.splice(index, 1)
            }
        })
        copyInterviewHour[focus.day] = [...copyInterviewDay]
        setInterviewHour([...copyInterviewHour])
        setInterviews([...copyInterviews])
        setFocus({day: -1, hour: -1})
    }

    return (
        <AppWrapper>
            <Flex minWidth={'320px'} maxWidth={'740px'} width={'740px'} justifyContent={'center'} direction={'column'}>
                <Header addInterview={addInterview}/>
                <NavigationMenu days={days} currentDay={currentDay} month={month}
                                changePage={changePage}/>
                <Main interviewHour={interviewHour} focusedInterview={focusedInterview} focus={focus}/>
                <Footer todayCurrent={todayCurrent} focus={focus} deleteInterview={deleteInterview}/>
                {
                    // 2022-08-10 00:56:35
                }
            </Flex>
        </AppWrapper>
    );
}

export default App;
