import React, { useState, useEffect} from "react";
import { Box, Loader, getTheme } from "styled-minimal";

const Child = ({ color = "yellow", duration = '1000', start, callback, index }) => {
  const [loading, setLoading] = useState(start)
  const { colors } = getTheme();

  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
        callback(index + 1)
      }, duration);
  }, []);

  if(loading){
    return (<Box
    alignItems="center"
    bg="transparent"
    border={`2px solid ${colors[color]}`}
    display="flex"
    height={128}
    justifyContent="center"
  >
    <Loader color={colors[color]} size={48} />
  </Box>)
  }

  return (<Box
        alignItems="center"
        bg={`${colors[color]}`}
        border={`2px solid ${colors[color]}`}
        display="flex"
        height={128}
        justifyContent="center"
      >
  </Box>)
};

export default Child;
