import React, { useEffect, useState } from "react";

const useCountdown = (startTime) => {
  //helper conversion functions for time

  const calculateHour = (sec) => {
    return Math.floor(sec / (60 * 60));
  };

  const calculateMinute = (sec) => {
    return Math.floor((sec % (60 * 60)) / 60);
  };

  const calculateSecond = (sec) => {
    return sec % 60;
  };

  const [hour, setHour] = useState(calculateHour(startTime));
  const [minute, setMinute] = useState(calculateMinute(startTime));
  const [second, setSecond] = useState(calculateSecond(startTime));
  const [countingDown, setCountingDown] = useState(false);

  useEffect(() => {
    if (countingDown) {
      const timer = setTimeout(() => {
        if (second > 0) {
          setSecond(second - 1);
        }

        if (second === 0) {
          setSecond(60);

          if (minute >= 1) {
            setMinute(minute - 1);
          }

          if (minute === 0 && hour >= 1) {
            setHour(hour - 1);
          }
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  // start timer
  const onStart = () => {
    setCountingDown(true);
  };

  // pause timer
  const onPause = () => {
    setCountingDown(false);
  };

  // resume timer
  const onResume = () => {
    setCountingDown(true);
  };

  // reset timer
  const onReset = () => {
    setHour(calculateHour(startTime));
    setMinute(calculateMinute(startTime));
    setSecond(calculateSecond(startTime));
  };

  //format the time to return
  const getTime = () => {
    return {
      h: hour,
      m: minute,
      s: second,
    };
  };

  const getHour = () => {
    return hour;
  };

  const getMinute = () => {
    return minute;
  };

  const getSecond = () => {
    return second;
  };

  return {
    onStart,
    onPause,
    onResume,
    onReset,
    getTime,
    getHour,
    getMinute,
    getSecond,
  };
};

export default useCountdown;
