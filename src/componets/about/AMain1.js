import { Typography } from '@mui/material'
import React from 'react'

import AMain1Back from '../../assets/img/about/main1.png'

export default function AMain1() {
    return (
        <div className='about-main1'
            style={{
                minHeight: '100%',
                height: 'calc(100vh - 116px)',
                backgroundImage: `url(${AMain1Back})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center',
                backgroundSize: 'contain',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
               
            }}>
            <Typography
                sx={{
                    mt: 10,
                    width: { xs: '300px', sm: '450px', md: '600px', lg: '930px' },
                    fontSize: { xs: '48px', sm: '60px'},
                    fontWeight: '700',
                    textAlign: 'center',
                    background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)',
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                Exodus empowers people to control their wealth.
            </Typography>
            <Typography
                sx={{
                    textAlign: 'left',
                    fontSize: '25px',
                    color: 'white',
                    fontWeight: '500',
                    mt: '30px',
                }}>
                EXODUS GIVES YOU THE POWER
            </Typography>
        </div>
    )
}
