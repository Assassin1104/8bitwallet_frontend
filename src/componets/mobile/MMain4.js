import React from 'react'

import { Box, Grid, Typography } from '@mui/material'

import MMain4PhoneImage1 from '../../assets/img/mobile/main4/header-img1-lsize (1).png'
import MMain4PhoneImage2 from '../../assets/img/mobile/main4/exchange-img1-lsize.png'
import MMain4PhoneImage3 from '../../assets/img/mobile/main4/exchange-img3-lsize.png'

export default function MMain4() {
    return (
        <div className='mobile-main4'
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
                Exchange. Anytime. Anywhere
            </Typography>
            <Typography
                sx={{
                    mt: 5,
                    width: { xs: '300px', md: '600px', lg: '900px' },
                    fontSize: '25px',
                    fontWeight: '500',
                    textAlign: 'center',
                    color: 'white'
                }}>
                Buy and sell cryptocurrency from the comfort of your mobile crypto wallet app, in seconds - no signup required.
            </Typography>
            <Box
                sx={{
                    display: { xs: 'none', md: 'none', lg: 'flex' },
                    flexDirection: { md: 'colume', lg: 'row' },
                    mt: 10
                }}>
                <Grid
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Grid item xs={0} md={4} lg={4}
                        sx={{
                            marginRight: '-40px',
                            marginTop: '-100px',
                            display: {
                                xs: 'none', md: 'none',
                                lg: 'block'
                            }
                        }}>
                        <img
                            src={`${MMain4PhoneImage2}`}
                            alt="main4phoneimage2"
                            sx={{
                                marginTop: '-50px',
                                marginRight: '-40px',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}
                        sx={{
                            mx: 0,
                            width: { xs: '80%', md: '100%' }
                        }}>
                        <img
                            src={`${MMain4PhoneImage1}`}
                            alt="main4phoneimage1"
                            style={{
                                width: { xs: '80%', md: '100%' }
                            }}
                        />
                    </Grid>
                    <Grid item xs={0} md={4} lg={4}
                        sx={{
                            marginLeft: '-40px',
                        }}>
                        <img
                            src={`${MMain4PhoneImage3}`}
                            alt="main4phoneimage3 "
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    display: { xs: 'block', md: 'none', lg: 'none' }
                }}>
                <img
                    src={`${MMain4PhoneImage1}`}
                    alt="main4phoneimage1" />
            </Box>
        </div >
    )
}
