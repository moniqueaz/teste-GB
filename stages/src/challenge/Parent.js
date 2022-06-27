import React, {useState} from "react";
import { Container, Heading } from "styled-minimal";
import "./styles.css";
import {mountNewSteps} from './helper'
import data from "./data.json";
import Child from "./Child";

export default function Parent() {

  const newSteps = mountNewSteps(data)
  const [step, setStep] = useState(newSteps)

  const updateSteps = () => {
    let firstStartFalse = false // marca o primeiro start false do array abaixo

    // percorre array de step para setar o proximo child que irá startar
    const result = step.map(st => {
      if(st.start === false && !firstStartFalse){
        firstStartFalse = true
        st.start = true
        return st
      }
      return st
    })
    setStep(result)
  }

  return (
    <Container>
      <Heading mb={4} textAlign="center">
        Challenge
      </Heading>
      {
        step.map(({value, key, duration, start}) => start && <div className="child">
          <Child 
          key={key} color={value} duration={duration} start={start}
          callback={updateSteps}
          />
        </div>
        )
      }
    </Container>
  );
}
