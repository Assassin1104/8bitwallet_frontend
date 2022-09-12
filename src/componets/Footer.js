import React from 'react'

import { Accordion, AccordionDetails, AccordionSummary, Grid, IconButton, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import LogoImage from '../assets/img/logo.png'

import TelegramImage from '../assets/img/social/telegram.png'
import InstanceImage from '../assets/img/social/instance.png'
import MediumImage from '../assets/img/social/medium.png'
import DiscourImage from '../assets/img/social/discord.png'
import LinkedinImage from '../assets/img/social/linkedin.png'
import TwitterImage from '../assets/img/social/twitter.png'

import '../assets/css/Footer.css'

export default function Footer() {
    return (
        <div style={{ color: 'white', backgroundColor: '#010C11', paddingTop: '40px', paddingBottom: '20px' }}>
            <Container className='footer' style={{ color: 'white', backgroundColor: '#010C11' }}>
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, justifyContent: 'space-around', }}>
                    <Box>
                        <img src={`${LogoImage}`} style={{ width: '176px', height: '66px' }} alt="logoimage" />
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <p>Product</p>
                            <p style={{ color: '#8F8F8F' }}>Web3 Wallet</p>
                            <p style={{ color: '#8F8F8F' }}>Mobile Wallet</p>
                            <p>Support</p>
                            <p style={{ color: '#8F8F8F' }}>Status</p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <p>Crypto News</p>
                            <p style={{ color: '#8F8F8F' }}>Crypto Prices</p>
                            <p>Company</p>
                            <p style={{ color: '#8F8F8F' }}>About Us</p>
                            <p style={{ color: '#8F8F8F' }}>Contact us</p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <p>Social</p>
                            <Box>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <img src={`${TelegramImage}`} alt='telegramimage' />
                                </IconButton>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <img src={`${InstanceImage}`} alt='instanceimage' />
                                </IconButton>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <img src={`${MediumImage}`} alt='mediumimage' />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <img src={`${DiscourImage}`} alt='discordimage' />
                                </IconButton>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <img src={`${LinkedinImage}`} alt='linkedinimage' />
                                </IconButton>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <img src={`${TwitterImage}`} alt='twitterimage' />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={
                    {
                        display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }
                    }
                }>
                    <Accordion className="footer-acc" sx={{ backgroundColor: '#010C11' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ borderTop: '1px soild gray' }}
                        >
                            <Typography sx={{ color: 'white' }}>Product</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: '#8F8F8F', textAlign: 'left', mt: 3 }}>
                                Web3 Wallet
                            </Typography>
                            <Typography sx={{ color: '#8F8F8F', textAlign: 'left', mt: 3 }}>
                                Mobile Wallet
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="footer-acc" sx={{ backgroundColor: '#010C11' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ borderTop: '1px soild gray' }}
                        >
                            <Typography sx={{ color: 'white' }}>Support</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: '#8F8F8F', textAlign: 'left', mt: 3 }}>
                                Stauts
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="footer-acc" sx={{ backgroundColor: '#010C11' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ borderTop: '1px soild gray' }}
                        >
                            <Typography sx={{ color: 'white' }}>Crypto News</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: '#8F8F8F', textAlign: 'left', mt: 3 }}>
                                Crypto Prices
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="footer-acc" sx={{ backgroundColor: '#010C11' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ borderTop: '1px soild gray' }}
                        >
                            <Typography sx={{ color: 'white' }}>Company</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: '#8F8F8F', textAlign: 'left', mt: 3 }}>
                                About Us
                            </Typography>
                            <Typography sx={{ color: '#8F8F8F', textAlign: 'left', mt: 3 }}>
                                Contact Us
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Box>
                        <p>Social</p>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <img src={`${TelegramImage}`} alt='telegramimage' />
                            </IconButton>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <img src={`${InstanceImage}`} alt='instanceimage' />
                            </IconButton>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <img src={`${MediumImage}`} alt='mediumimage' />
                            </IconButton>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <img src={`${DiscourImage}`} alt='discordimage' />
                            </IconButton>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <img src={`${LinkedinImage}`} alt='linkedinimage' />
                            </IconButton>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <img src={`${TwitterImage}`} alt='twitterimage' />
                            </IconButton>
                    </Box>
                </Box>
            </Container>

            <hr style={{ color: '#616161' }}></hr>
            <Container className='footer' style={{ color: 'white', paddingTop: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                    <Box>
                        <p>Copyright@2022</p>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <p>Privacy Policy</p>
                        <p style={{ marginLeft: '30px' }}>Terms of service</p>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}
