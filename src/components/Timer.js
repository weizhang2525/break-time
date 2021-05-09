/** @jsxImportSource theme-ui */

import React, { useState } from "react";
import { Flex, Paragraph, Button } from "theme-ui";
import useCountdown from "../hooks/useCountdown";
import styled from "styled-components";

const RowFlexBox = styled(Flex)`
  display: flex;
  flex-direction: row;
`;

const ColumnFlexBox = styled(Flex)`
  display: flex;
  flex-direction: column;
`;

const Timer = (props) => {
  const {
    onStart,
    onPause,
    onResume,
    onReset,
    getTime,
    getHour,
    getMinute,
    getSecond,
  } = useCountdown(parseInt(props.startTime));

  const { timerRunning, setTimerRunning } = useState(false);

  return (
    <>
      <RowFlexBox
        sx={{
          textAlign: "center",
        }}
      >
        <ColumnFlexBox>
          <Paragraph>{getHour()}</Paragraph>
          <Paragraph>H</Paragraph>
        </ColumnFlexBox>
        <ColumnFlexBox>
          <Paragraph>{getMinute()}</Paragraph>
          <Paragraph>M</Paragraph>
        </ColumnFlexBox>
        <ColumnFlexBox>
          <Paragraph>{getSecond()}</Paragraph>
          <Paragraph>S</Paragraph>
        </ColumnFlexBox>
      </RowFlexBox>
      <RowFlexBox>
        <Button onClick={onStart}>Start</Button>
        <Button onClick={onPause}>Pause</Button>
        <Button onClick={onResume}>Resume</Button>
        <Button onClick={onReset}> Reset</Button>
      </RowFlexBox>
    </>
  );
};

export default Timer;
