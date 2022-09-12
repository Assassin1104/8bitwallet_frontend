import React from 'react'

import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import '../../assets/css/MMain2.css'

import MMain2PhoneImage1 from '../../assets/img/mobile/main2/header-img1-lsize.png'
import MMain2PhoneImage2 from '../../assets/img/mobile/main2/header-img2-lsize.png'
import MMain2PhoneImage3 from '../../assets/img/mobile/main2/header-img3-lsize.png'

export default function MMain2() {

    return (
        <div className='mobile-main2'
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Box
                sx={{
                    display: 'flex'
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
                    Secure, manage, and exchange your cryptocurrency with the mobile security of face or fingerprint scanning.
                </Typography>
            </Box>
            <Box
                sx={{
                    display: { xs: 'none', md: 'none', lg: 'flex', xl: 'flex' },
                    alignItems: 'center',
                    mt: 10,
                    scale: { display: { xs: 0.7, md: 1 } }
                }}>
                <img src={`${MMain2PhoneImage2}`} alt="MMain2PhoneImage2" />
                <img src={`${MMain2PhoneImage1}`} alt="MMain2PhoneImage1" />
                <img src={`${MMain2PhoneImage3}`} alt="MMain2PhoneImage3" />
            </Box>
            <Box className="pic-ctn"
                sx={{
                    display: { xs: 'block', md: 'block', lg: 'none', xl: 'none' },
                    justifyContent: 'center'
                }}>
                <img src={`${MMain2PhoneImage1}`} alt="MMain2PhoneImage1" className="pic" style={{ width: '80%' }} />
                <img src={`${MMain2PhoneImage2}`} alt="MMain2PhoneImage2" className="pic" style={{ width: '80%' }} />
                <img src={`${MMain2PhoneImage3}`} alt="MMain2PhoneImage3" className="pic" style={{ width: '80%' }} />
            </Box>
        </div>
    )
}




// sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}