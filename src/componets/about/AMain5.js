import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";


import { Box, Grid, Typography } from '@mui/material'

import PersoneCard from './PersoneCard'

import '../../assets/css/AMain5.css'


export default function AMain5() {

  return (
    <div className='about-main5'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        minHeight: '100vh'
      }}>

      <Typography
        sx={{
          mt: 10,
          width: { xs: '300px', md: '600px', lg: '930px' },
          fontSize: '40px',
          fontWeight: '500',
          background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)',
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
        Human of Polygun
      </Typography>
      <Box
        sx={{
          display: { xs: 'none', md: 'none', lg: 'block', xl: 'block' }
        }}>
        <Grid
          container
          spacing={2}
          color='white'
          sx={{ mt: '10px' }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            xl={4}
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
            <PersoneCard humanNsum='1' humanName='David Arjun' humanRole='co-founder' />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            xl={4}
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
            <PersoneCard humanNsum='1' humanName='David Arjun' humanRole='co-founder' />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            xl={4}
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
            <PersoneCard humanNsum='1' humanName='David Arjun' humanRole='co-founder' />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            xl={4}
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
            <PersoneCard humanNsum='1' humanName='David Arjun' humanRole='co-founder' />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            xl={4}
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
            <PersoneCard humanNsum='1' humanName='David Arjun' humanRole='co-founder' />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            xl={4}
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
            <PersoneCard humanNsum='1' humanName='David Arjun' humanRole='co-founder' />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: { xs: 'block', md: 'block', lg: 'none', xl: 'none' },
          width: { xs: '300px', sm: '350px', lg: '400px' },
          maxWidth: '420px',
          mb: '20px'
        }}>
        <Swiper
          cssMode={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><PersoneCard humanNsum='1' humanName='David Arjun' humanRole='co-founder' /></SwiperSlide>
          <SwiperSlide><PersoneCard humanNsum='1' humanName='David Jonas' humanRole='co-founder' /></SwiperSlide>
          <SwiperSlide><PersoneCard humanNsum='1' humanName='David Krone' humanRole='co-founder' /></SwiperSlide>
          <SwiperSlide><PersoneCard humanNsum='1' humanName='David Wang' humanRole='co-founder' /></SwiperSlide>
          <SwiperSlide><PersoneCard humanNsum='1' humanName='David V.' humanRole='co-founder' /></SwiperSlide>
          <SwiperSlide><PersoneCard humanNsum='1' humanName='David K.' humanRole='co-founder' /></SwiperSlide>

          <div class="amain5-swiper-pagination" />
        </Swiper>

      </Box>
    </div>
  )
}
