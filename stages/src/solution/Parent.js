import React, {useState, useEffect} from "react";
import { Container, Heading } from "styled-minimal";
import "./styles.css";
import {mountNewSteps} from './helper'
import data from "./data.json";
import Child from "./Child";

export default function Parent() {
  const [step, setStep] = useState([])

  useEffect(() => {
    setStep(mountNewSteps(data))
  }, []);

  const updateSteps = (index) => {
    if(index < step.length){
      const newStep = [...step]
      newStep[index].start = true
      setStep(newStep)
    }
  }

  return (
    <Container>
      <Heading mb={4} textAlign="center">
        Solution
      </Heading>
      {
        step.map(({value, key, duration, start}, index) => start && (
          <div className="child">
            <Child 
              key={key}
              color={value}
              duration={duration}
              start={start}
              callback={updateSteps}
              index={index}
            />
          </div>
        ))
      }
    </Container>
  );
}