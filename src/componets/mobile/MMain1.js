import { Button, Typography } from '@mui/material'
import React from 'react'

import { Box, Container } from '@mui/system'
//images
import MMain1Image from '../../assets/img/mobile/main1/phone.png'
import MMain1GoogleImage from '../../assets/img/mobile/main1/google.png'
import MMain1AppStoreImage from '../../assets/img/mobile/main1/appstore.png'

export default function MMain1() {
    return (
        <div className='mobile-main1'
            style={{
                height: 'calc(100vh - 116px)',
                backgroundImage: `url(${MMain1Image})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '100% 100%',
                minHeight: '100%'
            }}>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItem: 'center',
                        mt: { xs: '10vh', sm: '15vh', md: '30vh', lg: '40vh' },
                        flexDirection: 'column'
                    }}>
                    <Typography
                        sx={{
                            fontSize: '40px',
                            fontWeight: '700',
                            color: 'white',
                            width: { xs: '300px', md: '480px', lg: '600px' },
                            textAlign: 'left',
                        }}>
                        Your Crypto Anywhere
                        <span
                            style={{
                                background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)',
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}> In Your Crypto & Bitcoin Wallet App</span>
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'left',
                            fontSize: '15px',
                            color: '#C7C7C7',
                            mt: '30px',
                            mb: '50px',
                            fontWeight: '500'
                        }}>
                        Sync desktop and mobile. Exchange on the go
                    </Typography>
                    <Box className='mobile-main1-download'
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' },
                            justifyContent: { xs: 'none', sm: 'left', md: 'left', lg: 'left', xl: 'left' },
                            alignItems: { xs: 'center', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
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
                </Box>
            </Container>
        </div>
    )
}
