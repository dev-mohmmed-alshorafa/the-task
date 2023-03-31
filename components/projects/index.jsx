import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Tabs from './Tabs'
import SliderProjects from './Slider'
import ShowMoreBtn from '../ShowMoreBtn'
export default function Projects() {
  const [isActiveTab, setIsActiveTab] = useState('NEOM')
  return (
    <Stack id='projects'
      className="projects"
      direction={{ md: 'row', xs: 'column' }}
      position={'relative'}
      top={'-50px'}
    >
      <Tabs isActiveTab={isActiveTab} setIsActiveTab={setIsActiveTab} />
      <Stack position={'relative'} width={{ md: '60vw', xs: '100vw' }}>
        <SliderProjects />
        <Stack gap={'50px'} p={'20px'} position="absolute" bottom={'100px'}>
          <Typography sx={{ fontSize: '30px',color:'white', fontWeight: '700' }}>
            {isActiveTab}
          </Typography>
          <Typography sx={{ fontSize:{md: '25px',xs:'16px'},maxWidth:{md:'80%',xs:'100%'},color:'white', fontWeight: '400' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            consectetur accusantium quisquam ullam omnis magnam voluptatibus
            nostrum, obcaecati repellat nihil vel ratione assumenda? Sequi
            vitae, quidem officiis eos repudiandae laudantium?
          </Typography>
          <Box display={'flex'}>
            <ShowMoreBtn />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}
