import fetchData from '@/pages/data'
import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ShowMoreBtn from '../ShowMoreBtn'

export default function About() {
  const [slider, setSlider] = useState([])
  const getData = async () => {
    const data = await fetchData()
    setSlider(data.data?.movies.slice(0, 3))
  }
  const [item, setItem] = useState(0)

  const tabs = ['Explore', 'Visit', 'Invest']
  useEffect(() => {
    getData()
  }, [])
  return (
    <Stack id='about' position={'relative'} overflowX="hidden">
      <Stack
        sx={{
          overflowX: 'hidden',
          width: '100%',
          height: '110vh',
          background: `url(${
            slider.length > 0 && slider[item || 0].large_cover_image
          })`,
          backgroundSize: 'cover',
        }}
      ></Stack>
      <Stack
        position={'absolute'}
        p={'100px'}
        alignItems={'center'}
        sx={{ width: '100%', height: '100%', background: '#00000073' }}
        justifyContent={'space-between'}
      >
        <Stack alignItems={'center'} gap={'50px'}>
          <Typography
            sx={{
              fontSize: '3.2rem',
              color: 'white',
              fontWeight: '900',
              textAlign: { xs: 'center', md: 'center' },
              maxWidth: '600px',width:'100%'
            }}
          >
            About The Kingdom
          </Typography>
          <Stack
            gap={{ md: '150px', xs: '0px' }}
            justifyContent={'space-between'}
            direction={'row'}
          >
            {tabs.map((e, i) => (
              <Typography key={i}
                onClick={() => setItem(i)}
                className=""
                sx={{
                  fontSize: '20px',
                  padding: { md: '15px 40px', xs: '10px 20px' },
                  borderRadius: '40px',
                  color: item === i ? 'white' : 'gray',
                  cursor: 'pointer',
                  fontWeight: '700',
                  background: item === i ? ' rgba(255,255,255,.1)' : '',
                  textAlign: { xs: 'center', md: 'start' },
                  maxWidth: '600px',
                }}
              >
                {e}
              </Typography>
            ))}
          </Stack>
        </Stack>
        <Stack
          flexWrap={'wrap'}
          justifyContent={'space-between'}
          gap={'50px'}
          direction={'row'}
        >
          <Typography
            sx={{
              fontSize: { sm: '55px', xs: '25px' },
              color: 'white',
              fontWeight: '900',

              textAlign: { xs: 'center', md: 'start' },
              maxWidth: '600px',
            }}
            width={{ sm: '40%', xs: '100%' }}
          >
            {slider.length > 0 && slider[item].title}
          </Typography>
          <Stack gap={{sm:'100px',xs:'20px'}} width={{ sm: '40%', xs: '100%' }}>
            <Typography
              sx={{
                fontSize: '16px',
                color: 'white',
                fontWeight: '600',
                textAlign: { xs: 'center', md: 'start' },
                maxWidth: '600px',
              }}
              maxWidth={'400px'}
            >
              {slider.length > 0 && slider[item].summary.slice(0, 100)}
            </Typography>
            <Box display={'flex'}>
              <ShowMoreBtn />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
