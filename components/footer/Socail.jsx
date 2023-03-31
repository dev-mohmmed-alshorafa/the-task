import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, Stack } from '@mui/material';
function Socail() {
  const links = [
    {
      link: '#',
      icon: <FacebookOutlinedIcon />,
    },
    {
      link: '#',
      icon: <InstagramIcon />,
    },
    {
      link: '#',
      icon: <TwitterIcon />,
    },
    {
      link: '#',
      icon: <YouTubeIcon />,
    },
  ]
  return <Stack direction={'row'} gap={'10px'}>
    {links.map((e,i)=> <Link sx={{color:'white'}} key={i} href={e.link}>
      {e.icon}
    </Link> )}
  </Stack>
}

export default Socail
