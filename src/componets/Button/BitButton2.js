import { Button } from '@mui/material'
import React from 'react'

import ButtonBackground from '../../assets/img/buttonback.png'

export default function BitButton2(props) {
  return (

    <Button
      href="#"
      variant="contained"
      sx={{
        my: 10,
        mx: 1.5,
        color: 'white',
        backgroundImage: { ButtonBackground },
        display: { xs: props.displayXS, md: props.displayMD },
      }}
      style={{
        borderRadius: '0 20px',
        width: '156px',
        height: '50px',
        fontSize: "15px",
        background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)',
        fontWeight: '400'
      }}
    >
      {props.content}
    </Button>
  )
}
