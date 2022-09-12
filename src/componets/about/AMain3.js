import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

import AMain3Back from '../../assets/img/about/world.png'

export default function AMain3() {
    return (
        <div className='about-main3'
            style={{
                backgroundImage: `url(${AMain3Back})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                minHeight: '100vh'
            }}>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' },
                        justifyContent: 'space-around',
                        alignItems: { xs: 'center', sm: 'normal' },
                        pt: '79px'
                    }}>
                    <Typography
                        sx={{
                            textAlign: 'left',
                            fontSize: '40px',
                            color: 'white',
                            fontWeight: '500',
                        }}>
                        Safe
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'left',
                            fontSize: '40px',
                            color: 'white',
                            fontWeight: '500',
                        }}>
                        Reliable
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'left',
                            fontSize: '40px',
                            color: 'white',
                            fontWeight: '500',
                        }}>
                        Trusted
                    </Typography>
                </Box>
                <Grid container spacing={2} sx={{
                    textAlign: 'center',
                    mt: { xs: '20px', md: '40vh', lg: '60vh', xl: '60vh' },
                    mb: '10vh'
                }}>
                    <Grid item xs={12} md={6} lg={3} xl={3}>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: '20px',
                                    color: 'white',
                                    fontWeight: '300',
                                    textAlign: 'center',
                                    mt: '10px'
                                }}>
                                FOUNDED IN
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '40px',
                                    color: 'white',
                                    fontWeight: '500',
                                    textAlign: 'center'
                                }}>
                                2015
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '20px',
                                    color: 'white',
                                    fontWeight: '300',
                                    textAlign: 'center'
                                }}>
                                By JP Richardson and <br />Daniel Castagnoli
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} xl={3}>
                        <Typography
                            sx={{
                                fontSize: '20px',
                                color: 'white',
                                fontWeight: '300',
                                textAlign: 'center',
                                mt: '10px'
                            }}>
                            PRODUCT UPDATES
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '40px',
                                color: 'white',
                                fontWeight: '500',
                                textAlign: 'center'
                            }}>
                            200+
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '20px',
                                color: 'white',
                                fontWeight: '300',
                                textAlign: 'center'
                            }}>
                            New releases across desktop, <br />mobile and hardware

                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} xl={3}>
                        <Typography
                            sx={{
                                fontSize: '20px',
                                color: 'white',
                                fontWeight: '300',
                                textAlign: 'center',
                                mt: '10px'
                            }}>
                            NEW RELEASE EVERY
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '40px',
                                color: 'white',
                                fontWeight: '500',
                                textAlign: 'center'
                            }}>
                            2 Weeks
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '20px',
                                color: 'white',
                                fontWeight: '300',
                                textAlign: 'center'
                            }}>
                            Released software every two <br />weeks since 2015
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} xl={3}
                        sx={{
                            textAlign: 'center'
                        }}>
                        <Typography
                        align='center'
                            sx={{
                                fontSize: '20px',
                                color: 'white',
                                fontWeight: '300',
                                textAlign: 'center',
                                mt: '10px'
                            }}>
                            DIGITAL ASSETS
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '40px',
                                color: 'white',
                                fontWeight: '500',
                                textAlign: 'center'
                            }}>
                            235+
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '20px',
                                color: 'white',
                                fontWeight: '300',
                                textAlign: 'center'
                            }}>
                            Supported cryptocurrencies <br />inside Exodus products
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
