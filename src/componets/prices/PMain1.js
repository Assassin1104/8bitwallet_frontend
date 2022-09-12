import { Box, Typography } from '@mui/material'
import React, { useLayoutEffect, useState } from 'react'
import BitCardCarousel from '../slide/cardcarousel/BitCardCarousel'
import Slider from "react-slick";
import BitCard from '../slide/cardcarousel/BitCard';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../assets/css/PMain2.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useRef } from 'react';

const cardDisplay = [
  'block',
  'block',
  'block',
  'block',
  'block',
  'block',
  'block',
  'block',
];

export default function PMain1() {

  const [slideCount, setHandleSilderCount] = useState(5)

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    return <span>Window size: {width} x {height}</span>;
  }


  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  if (getWidth > 1536) onHandlerSliderCount(5);
  else if (getWidth > 1200) onHandlerSliderCount(4);
  else if (getWidth > 900) onHandlerSliderCount(3);
  else if (getWidth > 600) onHandlerSliderCount(2);
  else if (getWidth < 600) onHandlerSliderCount(1);

  function onHandlerSliderCount(count) {
    setHandleSilderCount(count);
    console.log(count);

  }


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '500px',
    height: '1000px'
  };
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className='pirces-main1'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Box className='prices-main1-group'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '15px',
            color: '#5C5C5C',
            fontWeight: '500',
            mt: 10,
          }}>
          IN THE PAST 24 HRS
        </Typography>
        <Typography
          sx={{
            mt: 2,
            width: { xs: '300px', md: '600px', lg: '930px' },
            fontSize: '40px',
            fontWeight: '400',
            textAlign: 'center',
            background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)',
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
          Explore Cryptocurrency Markets
        </Typography>
        <Box
          sx={{
            display: 'flex',
            width: { xs: '220px', sm: '450px', md: '650px', lg: '900px', xl: '1200px' },
            maxWidth: '1200px',
            mb: '20px',
            mt: 10,
            ml: 3,
          }}
        >
          <Swiper
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1550: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >

            <SwiperSlide>
              <BitCard imageList='1' name='Bitcoin' nickName='BNB' price='$21,322.86' chartUp='+0.34%' chartColor='#3ECF8E' visble={cardDisplay[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <BitCard imageList='10' name='Bitcoin' nickName='XTZ' price='$21,322.86' chartUp='-0.34%' chartColor='red' visble={cardDisplay[1]} />
            </SwiperSlide>
            <SwiperSlide>
              <BitCard imageList='5' name='Bitcoin' nickName='USDT' price='$21,322.86' chartUp='+0.34%' chartColor='#3ECF8E' visble={cardDisplay[2]} />
            </SwiperSlide>
            <SwiperSlide>
              <BitCard imageList='4' name='Bitcoin' nickName='BTC' price='$21,322.86' chartUp='-0.34%' chartColor='red' visble={cardDisplay[3]} />
            </SwiperSlide>
            <SwiperSlide>
              <BitCard imageList='1' name='Bitcoin' nickName='BNB' price='$21,322.86' chartUp='+0.34%' chartColor='#3ECF8E' visble={cardDisplay[4]} />
            </SwiperSlide>
            <SwiperSlide>
              <BitCard imageList='10' name='Bitcoin' nickName='XTZ' price='$21,322.86' chartUp='-0.34%' chartColor='red' visble={cardDisplay[5]} />
            </SwiperSlide>
            <SwiperSlide>
              <BitCard imageList='5' name='Bitcoin' nickName='USDT' price='$21,322.86' chartUp='+0.34%' chartColor='#3ECF8E' visble={cardDisplay[6]} />
            </SwiperSlide>
            <SwiperSlide>
              <BitCard imageList='4' name='Bitcoin' nickName='BTC' price='$21,322.86' chartUp='-0.34%' chartColor='red' visble={cardDisplay[7]} />
            </SwiperSlide>
            
            <Box className="amain5-swiper-pagination" />
          </Swiper>

        </Box>

        <Slider {...settings}>

        </Slider>
        {/* <BitCardCarousel /> */}
      </Box>
    </div >
  )
}
