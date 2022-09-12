import React from 'react'
import { Box, Button, Container, Grid, IconButton, TextField, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

import TelegramImage from '../../assets/img/social/telegram.png'
import InstanceImage from '../../assets/img/social/instance.png'
import MediumImage from '../../assets/img/social/medium.png'
import DiscourImage from '../../assets/img/social/discord.png'
import LinkedinImage from '../../assets/img/social/linkedin.png'
import TwitterImage from '../../assets/img/social/twitter.png'

import CMainBackImage from '../../assets/img/contact/contack_back.png'


import '../../assets/css/CMain.css'

export default function CMain() {

  return (
    <div className='contact-main' style={{
      backgroundImage: `url(${CMainBackImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      maxHeight: '100%',
      minHeight: 'calc(100vh - 116px)',
    }}>
      <Typography
        sx={{
          mt: '80px',
          width: { xs: '300px', sm: '450px', md: '600px', lg: '930px' },
          fontSize: '60px',
          fontWeight: '900',
          textAlign: 'center',
          background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)',
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
        Get In Touch
      </Typography>
      <div
        style={{
          backgroundColor: '#00070A',
          maxWidth: '800px',
          marginTop: '80px',
          color: 'white',
          width: { xs: '300px', sm: '450px', md: '500px', lg: '650px', xl: '800px' },
          // paddingLeft: { xs: '10px', sm: '50px', md: '80px', lg: '100px', xl: '100px' },
          // paddingRight: { xs: '10px', sm: '50px', md: '80px', lg: '100px', xl: '100px' },
          paddingTop: '30px',
          paddingBottom: '30px',
          marginBottom: '150px'
        }}>
        <Container>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '20px'
          }}>
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: '25px',
                color: 'white',
                fontWeight: '500',
                mt: '20px',
                mb: '20px'
              }}>
              Send a Message
            </Typography>
            <Box >
              <EmailIcon sx={{ marginRight: '10px', width: '20px', height: '20px' }} />
            </Box>
          </Box>

          <Grid container rowSpacing={3} columnSpacing={2}>
            <Grid item xs={12} sm={6} rowSpacing={3}>
              <TextField
                className='contact-main-textfeild'
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                placeholder='First Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                className='contact-main-textfeild'
                fullWidth
                id="lastName"
                placeholder='Last Name'
                name="Last Name"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={6} rowSpacing={5}>
              <TextField
                name="phone"
                className='contact-main-textfeild'
                required
                fullWidth
                id="firstName"
                placeholder='Phone'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                className='contact-main-textfeild'
                fullWidth
                id="email"
                placeholder='Email'
                name="Eamil"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                className='contact-main-textfeild'
                fullWidth
                id="contactName"
                placeholder='Group or Company'
                name="contactName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                className='contact-main-textfeild'
                fullWidth
                name="help"
                placeholder='How can we help?'
                id="help"
                multiline='true'
                rows={3}
              />
            </Grid>
          </Grid>
          <Button
            href="#"
            variant="contained"
            sx={{
              color: 'white', mb: '36px', mt: '50px'
            }}
            style={{ borderRadius: '0 20px', width: '134px', height: '44px', fontSize: "20px", background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)', fontWeight: '400' }}
          >
            SUBMIT
          </Button>
          <hr style={{ color: '#BCBCBC', width: '100%', }}></hr>
        </Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            color: 'white',
            mt: '30px',
            mb: '50px',
            // width: { xs: '300px', sm: '450px', md: '500px', lg: '650px', xl: '800px' },
          }}
        >
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
      </div>

    </div>
  )
}
