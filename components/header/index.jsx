import React, { useEffect } from 'react'
import fetchData from '@/pages/data'
import Nav from './Nav'
import { Box, Link, Stack } from '@mui/material'
import Hero from './Hero'
import Test from './Test'
export default function Header() {
  return (
    <Stack sx={{ position: 'relative' }}>
      <Nav />
      <Stack position={'relative'} sx={{ overflow: 'hidden' }}>
        <Hero />
        <Stack sx={{ bottom: '200px', right: '50px' }} position={'absolute'}>
          <Link sx={{ textDecoration: 'none', color: 'white' }} href="#vision">
            SCROLL DOWN
          </Link>
          <Box position={'relative'} sx={{height:'50px',marginTop:'10px'}}>
            <Box position={'absolute'} className="scroll-line"></Box>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}
