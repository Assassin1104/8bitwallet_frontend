import React from 'react'

import { Box, Button, Typography } from '@mui/material'

import MMain1GoogleImage from '../../assets/img/mobile/main1/google.png'
import MMain1AppStoreImage from '../../assets/img/mobile/main1/appstore.png'

export default function PMain3() {
    return (
        <div className='price-main3'
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Typography
                sx={{
                    mt: 2,
                    width: { xs: '300px', md: '600px', lg: '930px' },
                    fontSize: '35px',
                    fontWeight: '500',
                    textAlign: 'center',
                    background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)',
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                Get Exodus wallet now to Buy, Send, Receive, and Exchange Bitcoin.
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '25px',
                    color: 'white',
                    fontWeight: '500',
                    mt: 4,
                }}>
                8Bit Wallet available for Mac OS, Windows, Linux, and iOS
            </Typography>
            <Box className='price-main3-download'
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' },
                    justifyContent: { xs: 'none', sm: 'left', md: 'left', lg: 'left', xl: 'left' },
                    alignItems: { xs: 'center', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
                    mt: 6,
                    mb: 6,
                }}>
                <Button className='mobile-main1-download-google'>
                    <img src={`${MMain1GoogleImage}`} alt='google-play-button' />
                </Button>
                <Button className='mobile-main1-download-app'>
                    <img src={`${MMain1AppStoreImage}`} alt='app-store-button'
                        style={{
                            // marginLeft: { xs: '0px', sm : '0px', md: '80px', lg: '80px', xl: '80px' },
                        }} />
                </Button>
            </Box>
        </div>
    )
}
