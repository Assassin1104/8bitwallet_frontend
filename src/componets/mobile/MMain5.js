import React from 'react'

import { Box, Typography } from '@mui/material'

import MMain5PhoneImage1 from '../../assets/img/mobile/main5/send-receive1-lsize.png'
import MMain5PhoneImage2 from '../../assets/img/mobile/main5/send-receive2-lsize.png'

import '../../assets/css/MMain5.css'

export default function MMain5() {
    return (
        <div className='mobile-main5'
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Typography
                sx={{
                    mt: 10,
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
                Send & Receive
            </Typography>
            <Typography
                sx={{
                    mt: 5,
                    maxWidth: '900px',
                    fontSize: '25px',
                    fontWeight: '500',
                    textAlign: 'center',
                    color: 'white'
                }}>
                Send and receive safely, using a QR code or address, knowing Exodus automatically checks all addresses for errors.
            </Typography>
            <Box
                sx={{
                    display: { xs: 'none', md: 'none', lg: 'block', xl: 'block' },
                    // flexDirection: { md: 'colume', lg: 'row' },
                    mt: 10
                }}>
                <img
                    src={`${MMain5PhoneImage1}`}
                    alt="main5phoneimage1"
                    style={{
                        marginTop: '80px'
                    }} />
                {/* <Box
                    sx={{
                        marginLeft: { xs: '-200px', md: '-100px', lg: '0' },
                    }}> */}
                    <img
                        src={`${MMain5PhoneImage2}`}
                        alt="main5phoneimage2"
                        style={{
                            marginBottom: '80px',
                        }} />
                {/* </Box> */}
            </Box>
            <Box className="pic-ctn"
                sx={{
                    display: { xs: 'block', md: 'block', lg: 'none', xl: 'none' },
                    justifyContent: 'center'
                }}>
                <img
                    src={`${MMain5PhoneImage1}`}
                    alt="MMain5PhoneImage1"
                    className="pic"
                    style={{ width: '80%' }}
                />
                <img
                    src={`${MMain5PhoneImage2}`}
                    alt="MMain5PhoneImage2"
                    className="pic"
                    style={{ width: '80%' }}
                />
            </Box>
        </div>
    )
}
