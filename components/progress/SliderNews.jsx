import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SliderComp from './SlickNews'
import { useTranslation } from 'react-i18next'
import { Slide } from 'react-awesome-reveal'

function SliderNews() {
  const { t } = useTranslation()

  return (
    <Stack
      id={'news'}
      p={'70px 0'}
      direction={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      gap="50px"
      sx={{
        overflowX: 'hidden',
        position: 'relative',
        top: '-50px',
      }}
    >
      <SliderComp />
    </Stack>
  )
}

export default SliderNews
