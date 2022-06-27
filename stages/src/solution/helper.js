export const mountNewSteps = ({steps, durations}) => {
  return steps.map((step, index) => ({...step, duration: durations[step.key], start: index === 0 ? true : false}))
}
