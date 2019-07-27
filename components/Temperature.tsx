import React from 'react'

function Temperature(props: { degrees: number }) {
  return <React.Fragment>{Math.round(props.degrees)}&deg;</React.Fragment>
}

export default Temperature
