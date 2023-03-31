import { Box, IconButton, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import Links from '../header/Links'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Socail from './Socail'
export default function Footer() {
  return (
    <Stack
      minHeight={'300px'}
      justifyContent={'space-between'}
      mt={'100px'}
      sx={{ background: '#1F395F' }}
    >
      <Stack
        alignItems={'center'}
        direction={'row'}
        sx={{ background: '#1F395F' }}
        justifyContent={'space-between'}
        p={'30px'}
        flexWrap={'wrap'}
        gap={'20px'}
      >
        <Box width={'80px'} height={'80px'} borderRadius={'50%'}>
          <img
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            src="https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"
            alt=""
          />
        </Box>
        <Stack flexWrap={'wrap'} gap={'30px'} direction={'row'}>
          <Links />
        </Stack>
        <Link
          href="#"
          sx={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
          }}
          gap={'15px'}
        >
          <IconButton sx={{ border: '1px solid white', padding: '25px' }}>
            <ArrowUpwardIcon sx={{ color: 'white' }} />
          </IconButton>
          <Typography sx={{ color: 'white' }}>Back to top</Typography>
        </Link>
      </Stack>
      <Stack p={'30px'} direction={'row'} justifyContent={'space-between'}>
        <Stack sx={{ visibility: 'hidden' }}>
          <Socail />
        </Stack>

        <Typography color="white">
          © All rights reserved to Saudi Vision 2030 - Kingdom of Saudi Arabia
          2022
        </Typography>
        <Socail />
      </Stack>
    </Stack>
  )
}
