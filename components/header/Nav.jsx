import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { Slide } from 'react-awesome-reveal'
import Links from './Links'
import NavDrawer from './Drower'
import { useContext } from 'react'
import { Store } from '../Storage'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search'
function Nav() {
  const { lang, setLang } = useContext(Store)
  const { i18n } = useTranslation()

  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    // Add event listener to the window to track scrolling
    window.addEventListener('scroll', handleScroll)
    return () => {
      // Remove event listener when component is unmounted
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    // Set the state based on the scroll position of the window
    if (window.pageYOffset > 200) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }
  return (
    <Stack
      dir={lang}
      className="nav"
      width={{ xs: '100vw' }}
      sx={{
        background: isSticky && 'white',
        boxShadow: isSticky && 'rgba(0, 0, 0, 0.52) 0px 1px 5px 0px',

        height: !isSticky && '100px',
      }}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      position={'fixed'}
      top={'0'}
      zIndex={'10'}
      p={{
        md: isSticky ? '35px 185px' : '100px 80px',
        sm: '30px 20px',
        xs: isSticky ? '35px 35px' : '20px 35px',
      }}
    >
      <Slide direction="left">
        <Stack
          sx={{
            height: '100%',
            borderRadius: '50px',
            margin: '0 20px',
          }}
          direction={'row'}
          gap={'15px'}
          alignItems={'center'}
        >
          <Box
            sx={{
              width: isSticky ? '50px' : '100px',
              height: isSticky ? '50px' : '100px',
              transform: lang === 'rtl' && 'rotateY(180deg)',
            }}
          >
            <img
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
              src="https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"
              alt=""
            />
          </Box>
        </Stack>
      </Slide>
      <Stack
        direction={'row'}
        alignItems="center"
        gap={{ xs: '10px', sm: '25px' }}
      >
        <Slide direction="right">
          <Stack
            display={{ xs: 'none', sm: 'flex' }}
            direction={'row'}
            gap={{ md: '5vw', sm: '25px' }}
          >
            <Links isSticky={isSticky} />
            <Divider
              sx={{ borderColor: isSticky ? '#707070' : 'white', height: '50px' }}
              orientation="vertical"
              flexItem
            />
              <IconButton>
              <SearchIcon
              sx={{ color: isSticky ? '#707070' : 'white', fontSize: '35px' }}
            />
              </IconButton>
           
          </Stack>
        </Slide>
        <Stack display={{ sm: 'none !important', xs: 'flex' }}>
          <NavDrawer isSticky={isSticky} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Nav
