import React from 'react'
import Slider from 'react-slick'
import { IconButton, Stack, Typography } from '@mui/material'
import { Slide } from 'react-awesome-reveal'
import { useContext } from 'react'
import { Store } from '../Storage'
import { useState } from 'react'
import { useEffect } from 'react'
import fetchData from '@/pages/data'
import ShowMoreBtn from '../ShowMoreBtn'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
function Hero() {
  const [slider, setSlider] = useState([])
  const getData = async () => {
    const data = await fetchData()
    setSlider(data.data?.movies)
  }
  useEffect(() => {
    getData()
  }, [])
  const { lang } = useContext(Store)
  const customArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <IconButton
        className="arrowsBtnR"
        type="button"
        onClick={onClickHandler}
        title={label}
        sx={{
          ...styles.arrow,
          ...styles.arrowPrev,
          left: { md: '42vw', sm: '35vw', xs: '200px' },
        }}
      >
        <ArrowBackIcon className="arrowsBtn" />
      </IconButton>
    )

  const customArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <IconButton
        className="arrowsBtnL"
        type="button"
        onClick={onClickHandler}
        title={label}
        sx={{
          ...styles.arrow,
          ...styles.arrowNext,
          right: { md: '42vw', sm: '25vw', xs: '20vw' },
        }}
      >
        <ArrowForwardIcon className="arrowsBtn" />
      </IconButton>
    )
  const customRenderStatus = (current, total) => (
    <div style={{ color: 'red', background: 'red' }}>
      {current}/{1000}
    </div>
  )
  return (
    <Carousel
      renderStatus={customRenderStatus}
      renderArrowPrev={customArrowPrev}
      renderArrowNext={customArrowNext}
      showIndicators={false}
      autoPlay={true}
      interval={3000}
      infiniteLoop
    >
      {slider.map((e, i) => (
        <Stack
          key={i}
          sx={{
            background: `url(${e.large_cover_image})`,
            height: '100vh',
            backgroundSize: 'cover',
            minWidth: { xs: '1200px' },
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            top: '0',
          }}
        >
          <Stack
            direction={{ md: 'row', xs: 'column' }}
            justifyContent={'space-between'}
            alignItems={'center'}
            height={'100%'}
            width={'100vw'}
            p={{ md: '0 9.6rem 0 9.6rem', xs: '50px 0' }}
            dir={lang}
          >
            <Stack
              mt="50px"
              height={'100%'}
              // width={'100vw'}
              gap={{ xs: '35px', md: '45px' }}
              justifyContent={'center'}
              alignItems={{ xs: 'center', md: 'flex-start' }}
            >
              <Typography
                sx={{
                  fontSize: '3.2rem',
                  color: 'white',
                  fontWeight: '900',
                  textAlign: { xs: 'center', md: 'start' },
                  maxWidth: '600px',
                }}
              >
                {e.summary?.slice(0, 50)}
              </Typography>
              <ShowMoreBtn />
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Carousel>
  )
}

export default Hero
const styles = {
  arrow: {
    position: 'absolute',
    top: 'calc(80% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: 20,
    color: '#fff',

    zIndex: 2,
  },
}
