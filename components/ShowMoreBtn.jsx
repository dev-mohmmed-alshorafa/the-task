import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function ShowMoreBtn() {
  return (
    <Stack
      className="ShowMoreBtn"
      direction="row"
      alignItems="center"
      sx={{
        borderRadius: '20px',
      }}
    >
      <Typography sx={{ color: 'white' }}>Read More</Typography>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          border: '.2rem solid #24b4ba',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
        }}
      >
        <ArrowForwardIcon className='arrow-icon' sx={{ color: '#24b4ba' }} />
      </Stack>
      <Box className="hoverShowMoreBtn"></Box>
    </Stack>
  )
}
