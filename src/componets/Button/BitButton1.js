import { Button } from '@mui/material'
import React from 'react'

import ButtonBackground from '../../assets/img/buttonback.png'

export default function BitButton1(props) {
    return (
        <Button
            href="#"
            variant="outlined"
            sx={{
                my: 1,
                mx: 1.5,
                color: 'white',
                backgroundImage: { ButtonBackground },
                display: { xs: props.displayXS, md: props.displayMD },
                fontWeight: '400',
                
            }}
            style={{
                borderRadius: '0 20px',
                fontSize: props.fontSize,
                padding: '10px 30px',
            }}
        >
            {props.content}
        </Button>
    )

}
