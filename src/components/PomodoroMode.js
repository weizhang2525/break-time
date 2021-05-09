/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import {useState} from 'react';

const PomodoroMode = props => {
    const [checksMarked, setChecksMarked] = useState({
        
            check1: false,
            check2: false,
            check3: false,
            check4: false
        
    })
    return (<Flex>
        <Button onClick = {()=> setChecksMarked((previousState) => {return {...previousState, check1: true}})}>Check 1</Button>
        <Button onClick = {()=> setChecksMarked((previousState) => {return {...previousState, check2: true}})}>Check 2</Button>
        <Button onClick = {()=> setChecksMarked((previousState) => {return {...previousState, check3: true}})}>Check 3</Button>
        <Button onClick = {()=> setChecksMarked((previousState) => {return {...previousState, check4: true}})}>Check 4</Button>
    </Flex>)
}

export default PomodoroMode