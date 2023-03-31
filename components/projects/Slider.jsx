import React from 'react'
import Slider from 'react-slick'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { Store } from '../Storage'
import { useState } from 'react'
import { useEffect } from 'react'
import fetchData from '@/pages/data'

function CustomDots(props) {
  const { onClick, active } = props
  const dots = []
  console.log(props)
  for (let i = 0; i < props.dots; i++) {
    dots.push(
      <span
        key={i}
        className={i === active ? 'dot active' : 'dot'}
        onClick={() => onClick(i)}
      >
        fffffffffffff
      </span>,
    )
  }

  return <div className="custom-dots">{dots}</div>
}

function SliderProjects({ tabs }) {
  const [slider, setSlider] = useState([])
  const getData = async () => {
    const data = await fetchData()
    setSlider(data.data?.movies.slice(0, 5))
  }
  useEffect(() => {
    getData()
  }, [])
  const { lang } = useContext(Store)

  var settings = {
    dots: true,
    // appendDots: (dots) => <CustomDots dots={dots} />,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  }
  return (
    <Slider {...settings}>
      {slider.map((e, i) => (
        <Stack
          key={i}
          sx={{
            background: `url(${e.large_cover_image})`,
            height: '95vh',
            backgroundSize: '100% 100%',
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
            p={{ md: '0 50px', xs: '50px 0' }}
            dir={lang}
          >
            <Stack
              mt="50px"
              height={'100%'}
              width={'100%'}
              position={'absolute'}
              top={'-50px'}
              right={'50px'}
              sx={{ background: '#0909096e' }}
            ></Stack>
          </Stack>
        </Stack>
      ))}
    </Slider>
  )
}

export default SliderProjects
