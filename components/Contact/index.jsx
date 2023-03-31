import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import ShowMoreBtn from '../ShowMoreBtn'

export default function Contact() {
  return (
    <Container id="contact" maxWidth="lg">
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{
          background: 'linear-gradient(to top right, #2882c3, #1f396c)',
          borderRadius: '20px',
          padding: '30px',
        }}
        flexWrap={'wrap'}
        gap={{ sm: '0', xs: '40px' }}
        width={'100%'}
      >
        <Typography
          sx={{
            fontSize: { sm: '28px', xs: '20px' },
            fontWeight: '700',
            color: 'white',
            maxWidth: { sm: '75%', xs: '100%' },
          }}
        >
          Contact us to learn more about the scale and ambition of Vision 2030
        </Typography>
        <ShowMoreBtn />
      </Stack>
    </Container>
  )
}
