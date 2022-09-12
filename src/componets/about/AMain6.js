import React from 'react'
import { Box, Container, Typography } from '@mui/material'

import BitButton1 from '../Button/BitButton1'

import AMain6GlobalImage from '../../assets/img/about/global.png'

export default function AMain6() {
    return (
        <div className='about-main6'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                // height: '100vh',
                minHeight: '100%',
                mt: '30px'
            }}>
            <Typography
                sx={{
                    fontSize: '20px',
                    color: 'white',
                    fontWeight: '500',
                    mt: '10px',
                    textAlign: 'center'
                }}>
                THE GOAL AT EXODUS
            </Typography>
            <Typography
                sx={{
                    mt: '30px',
                    width: { xs: '300px', sm: '450px', md: '600px', lg: '930px' },
                    fontSize: '30px',
                    fontWeight: '500',
                    textAlign: 'center',
                    background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)',
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                Remove the geek requirement, and keep design a priority, to make cryptocurrency easy for everyone.
            </Typography>
            <Box sx={{
                backgroundImage: `url(${AMain6GlobalImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '60%',
                height: '100%',
                textAlign: 'left',
                color: 'white',
                mb: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Container>
                    <p
                        style={{
                            fontSize: '40px',
                            color: 'white',
                            fontWeight: '300',
                            marginTop: '70px',
                            textAlign: 'left'
                        }}>
                        CAREERS
                    </p>
                    <p
                        style={{
                            fontSize: '35px',
                            color: 'white',
                            fontWeight: '500',
                            marginTop: '21px',
                            textAlign: 'left'
                        }}>
                        Working at Exodus
                    </p>
                    <p
                        style={{
                            fontSize: '20px',
                            color: 'white',
                            fontWeight: '300',
                            marginTop: '21px',
                            marginBottom: '50px',
                            maxWidth: '350px',
                            textAlign: 'left',
                        }}>
                        Is cryptocurrency your passion? Join Exodus and work from anywhere - all positions are 100% remote.
                    </p>
                    <Box sx={{ mb: 10 }}>
                        <BitButton1 content="VIEW OPEN POSITIONS" />
                    </Box>
                </Container>
            </Box>
        </div>
    )
}
