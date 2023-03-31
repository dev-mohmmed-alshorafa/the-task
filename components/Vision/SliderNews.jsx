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
      gap={{md:"50px"}}
      sx={{
        overflowX: 'hidden',
        background: '#152c59',
        position: 'relative',
        top: '-50px',
      }}
    >
      {/* <Slide direction="up"> */}
      <Stack alignItems={'center'} mb={'50px'}>
        <Box display={'flex'}>
          <Typography
            className="title"
            sx={{
              fontWeight: '800',
              marginLeft: {md:'50px'},
              textAlign: { xs: 'center', md: 'start' },
              color: 'white',
              minWidth: '22rem',
              maxWidth: '35.5rem',
              fontSize:{md: '60px',xs:'30px'},
            }}
          >
            Vision Realization Programs{' '}
          </Typography>
        </Box>
      </Stack>
      {/* </Slide> */}
      <SliderComp />
    </Stack>
  )
}

export default SliderNews
