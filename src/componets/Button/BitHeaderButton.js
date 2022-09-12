import { Button } from '@mui/material'
import React from 'react'

export default function BitHeaderButton(props) {
    return (
        <Button href={props.url} variant="text"
            sx={{
                my: 1,
                mx: 1.5,
                color: 'white',
                // borderBottom: '1px solid red'
                fontSize: '15px',
                fontWeight: '500'
            }}>
            {props.content}
        </Button>
    )
}
