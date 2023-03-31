import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
// import MenuItems from '../sideMenu/MenuItems'
import { IconButton, Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { Store } from '../Storage'
import Links from './Links'
// import { useSelector } from 'react-redux'

export default function NavDrawer({ isSticky }) {
  const { lang } = useContext(Store)

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  // const lng = useSelector((state) => state.lng)
  const toggleDrawer = (anchor, open) => (event) => {
    console.log(111)
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '280px',
        // borderRadius:lng === 'ar' ? '20px 0 0 20px' : '0 20px 20px 0' ,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        zIndex: 9999,
        border: 'none',
        // width:'80%'
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack
        pt={'40px'}
        alignItems={'center'}
        height={'100vh'}
        width={'300px'}
        sx={{ background: '#272729' }}
      >
        <Stack
          alignItems={'center'}
          height={'70%'}
          justifyContent={'center'}
          gap={'40px'}
        >
          <Links />
        </Stack>
      </Stack>
    </Box>
  )

  return (
    <div>
      {[lang !== 'rtl' ? 'right' : 'left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            sx={{
              display: {
                sm: 'none',
                xs: 'block',
                marginTop: '5px',
                padding: 0,
              },
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <Stack direction={'row'}>
              {/* <Typography color={'var(--dark-color)'}>ww</Typography> */}
              <MenuIcon
                sx={{
                  color: !isSticky ? 'var(--light-color)' : 'black',
                  fontSize: '35px',
                }}
              />
            </Stack>
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}
