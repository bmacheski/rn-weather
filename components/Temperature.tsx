import React from 'react'

const Temperature = React.memo((props: { degrees: number }) => {
  return <React.Fragment>{Math.round(props.degrees)}&deg;</React.Fragment>
})

export default Temperature
