import { Stack, Typography } from '@mui/material'
import React from 'react'
import SliderNews from './SliderNews'

function News() {
  return (
    <Stack  mt={'100px'}>
      <Typography
        mb={'50px'}
        align="center"
        sx={{ color: '#b4bdc1', fontWeight: '700', fontSize: '50px' }}
      >
        News
      </Typography>
      <Stack margin={'auto'} width={'90vw'}>
      <SliderNews/>

      </Stack>
    </Stack>
  )
}

export default News
