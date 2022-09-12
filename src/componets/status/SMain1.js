import { Typography } from '@mui/material'
import React from 'react'

import SMain1Back from '../../assets/img/status/back.png'

export default function SMain1() {
    return (
        <div className='status-main1'
            style={{
                height: 'calc(60vh)',
                backgroundImage: `url(${SMain1Back})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Typography
                sx={{
                    mt: 10,
                    width: { xs: '300px', md: '600px', lg: '930px' },
                    fontSize: '40px',
                    fontWeight: '400',
                    textAlign: 'center',
                    background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)',
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                Cryptocurrency Coins Status & Assets
            </Typography>

            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '20px',
                    color: 'white',
                    mt: '30px',
                    mb: '50px',
                    fontWeight: '400'
                }}>
               Supported Cryptocurrencies with Live Status Updates
            </Typography>
        </div>
    )
}
