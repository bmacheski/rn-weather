import React from 'react'

interface TemperatureProps {
  degrees: number
}

const Temperature = React.memo((props: TemperatureProps) => {
  return <React.Fragment>{Math.round(props.degrees)}&deg;</React.Fragment>
})

export default Temperature
