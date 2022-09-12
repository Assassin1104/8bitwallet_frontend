import { Button } from '@mui/material'
import React from 'react'

export default function BitButton3(props) {
  return (
    <Button
      href="#"
      variant="contained"
      sx={{
        color: 'white',
      }}
      style={{
        borderRadius: '0 20px', 
        width: '71px', 
        height: '34px', 
        fontSize: "12px", 
        background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)', 
        fontWeight: '500'
      }}
    >
      {props.content}
    </Button>
  )
}
