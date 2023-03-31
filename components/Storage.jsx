import React from 'react'
import { useState } from 'react'
import DiamondSharpIcon from '@mui/icons-material/DiamondSharp'
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined'
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined'
import { createContext } from 'react'
import SpokeIcon from '@mui/icons-material/Spoke'
import { useTranslation } from 'react-i18next'
export const Store = createContext(0)

function Storage(props) {
  const [lang, setLang] = useState('ltr')
  const { t } = useTranslation()

  const servise = [
    {
      icon: (
        <Diversity3OutlinedIcon sx={{ fontSize: '80px', color: '#3bb0c1' }} />
      ),
      title: t('aboutus'),
      link: '/about',
    },
    {
      icon: <SpokeIcon sx={{ fontSize: '80px', color: '#3bb0c1' }} />,
      title: t('business'),
      link: '/incubators',
    },
    {
      icon: <DiamondOutlinedIcon sx={{ fontSize: '80px', color: '#3bb0c1' }} />,
      title: t('co'),
      link: '/',
    },
    {
      icon: <DiamondOutlinedIcon sx={{ fontSize: '80px', color: '#3bb0c1' }} />,
      title: t('meetings'),
      link: '/',
    },
    {
      icon: <DiamondOutlinedIcon sx={{ fontSize: '80px', color: '#3bb0c1' }} />,
      title: t('studio'),
      link: '/',
    },
    {
      icon: <DiamondOutlinedIcon sx={{ fontSize: '80px', color: '#3bb0c1' }} />,
      title: t('Club'),
      link: '/',
    },
    {
      icon: <DiamondOutlinedIcon sx={{ fontSize: '80px', color: '#3bb0c1' }} />,
      title: t('top'),
      link: '/',
    },
    {
      icon: <DiamondOutlinedIcon sx={{ fontSize: '80px', color: '#3bb0c1' }} />,
      title: t('event'),
      link: '/',
    },
    {
      icon: <DiamondOutlinedIcon sx={{ fontSize: '80px', color: '#3bb0c1' }} />,
      title: t('hip'),
      link: '/',
    },
    {
      icon: (
        <DiamondOutlinedIcon
          sx={{ fontSize: '60px', fontWeight: '400', color: '#3bb0c1' }}
        />
      ),
      title: 'Clean Design',
      link: '/',
    },
  ]
  return (
    <div>
      <Store.Provider value={{ lang, setLang, servise }}>
        {props.children}
      </Store.Provider>
    </div>
  )
}

export default Storage
