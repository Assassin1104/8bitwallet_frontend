import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import MCart1 from '../cart/MCart1'

import '../../assets/css/MMain6.css'

export default function MMain6() {

    return (
        <div className='mobile-main6'
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
                    More Control When You're Ready
                </Typography>
                <Box
                    sx={{
                        display: { xs: 'none', md: 'none', lg: 'block', xl: 'block' },
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'column', lg: 'row' },
                            justifyContent: 'space-around'
                        }}>
                        <MCart1 cartNum="0" />
                        <MCart1 cartNum="1" />
                        <MCart1 cartNum="2" />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'column', lg: 'row' },
                            justifyContent: 'space-around'
                        }}>
                        <MCart1 cartNum="3" />
                        <MCart1 cartNum="4" />
                        <MCart1 cartNum="5" />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'block', md: 'block', lg: 'none', xl: 'none' },
                        width: { xs: '300px', sm: '350px', lg: '400px' },
                        justifyContent: 'center'
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
                        <SwiperSlide><MCart1 cartNum="0" /></SwiperSlide>
                        <SwiperSlide><MCart1 cartNum="1" /></SwiperSlide>
                        <SwiperSlide><MCart1 cartNum="2" /></SwiperSlide>
                        <SwiperSlide><MCart1 cartNum="3" /></SwiperSlide>
                        <SwiperSlide><MCart1 cartNum="4" /></SwiperSlide>
                        <SwiperSlide><MCart1 cartNum="5" /></SwiperSlide>
                        <div className="amain5-swiper-pagination" />
                    </Swiper>
                </Box>
        </div>

    )
}
