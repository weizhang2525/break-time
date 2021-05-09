import React, {useEffect, useState} from 'react'


const useCountdown = ({startTime = 6000 }) => {   
    let initialTime = startTime

    const [countingDown, setCountingDown] = useState(false)

    useEffect(() => {
        while(countingDown){
            initialTime--
        }
    }, [countingDown])

    // start timer
   const onStart = () => {
        setCountingDown(true)
    }


    // pause timer
    const onPause = () => {
        setCountingDown(false)
    }

    // resume timer
    const onResume = () => {
        setCountingDown(true)
    }

    // reset timer
    const onReset = () => {
        initialTime = startTime
    }

    //format the time to return 
    const formatTime = () => {
        
    }


}