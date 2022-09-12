import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import AMain2DoubleImage from '../../assets/img/about/double.png'

export default function AMain2() {
    return (
        <div className='about-main2' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <Typography
                sx={{
                    mt: 10,
                    width: { xs: '300px',sm: '450px', md: '600px', lg: '930px' },
                    fontSize: '40px',
                    fontWeight: '500',
                    textAlign: 'center',
                    background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)',
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                Secure, Manage, and Exchange cryptocurrency on desktop, mobile and hardware wallets.
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row', lg: 'row', xl: 'row' },
                    justifyContent: 'space-between',
                    mt: '68px',
                    mb: '60px'
                }}>
                <Box maxWidth='420px' sx={{mt: '41px', mr: {xs: '0px', md: '57px'}}}>
                    <img src={`${AMain2DoubleImage}`} alt="AMain2DoubleImage"/>
                    <Typography
                        sx={{
                            fontSize: '20px',
                            color: 'white',
                            fontWeight: '500',
                            mt: '41px',
                            // mr: '57px',
                            textAlign: 'center'
                        }}>
                        At Exodus we pour our hearts into every detail, from pixel-perfect icons to subtle sounds, creating a cryptocurrency experience that works for everyone.
                    </Typography>
                </Box>
                <Box maxWidth='420px' sx={{mt: '41px'}}>
                    <img src={`${AMain2DoubleImage}`} alt="AMain2DoubleImage"/>
                    <Typography
                        sx={{
                            fontSize: '20px',
                            color: 'white',
                            fontWeight: '500',
                            mt: '41px',
                            textAlign: 'center'
                        }}>
                        Our goal is to remove the geek requirement and make it fun and easy to learn and use cryptocurrency. No technical talk. No confusing steps - we think it shows.
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}
