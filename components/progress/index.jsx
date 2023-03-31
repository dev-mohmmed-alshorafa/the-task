import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Tabs from './Tabs'
import SliderNews from './SliderNews'

export default function Progress() {
  const [isActiveTab, setIsActiveTab] = useState('A Vibrant Society')

  return (
    <Stack position={'relative'}>
      <Typography
        mb={'100px'}
        align="center"
        sx={{ color: '#b4bdc1', fontWeight: '700', fontSize: '50px' }}
      >
        Progress & Achievements
      </Typography>
      <Stack direction={{md:'row',xs:'column'}}>
        <Tabs isActiveTab={isActiveTab} setIsActiveTab={setIsActiveTab} />
        <Stack width={{md:'59vw',xs:'100%'}}>
        <SliderNews />

        </Stack>
      </Stack>
      <Box
        position="absolute"
        sx={{
          width: '3px',
          height: '100%',
          top: '0',
          left: '357px',
          background: '#b4bdc1',
          display:{xs:'none',md:'block'},
          zIndex: -1,
        }}
      ></Box>
    </Stack>
  )
}
