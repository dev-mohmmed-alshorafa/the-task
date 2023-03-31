import { Box, Link, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
function Links({ isSticky }) {
  const { t } = useTranslation()
  const [isActive, setIsActive] = useState(0)
  const links = [
    {
      id: '/#',
      name: t('home'),
      children: null,
    },
    {
      id: '/#vision',
      name: t('Vision'),
      children: ['link', 'link'],
    }, {
      id: '/#projects',
      name: t('Projects'),
      children: ['link', 'link'],
    },
    {
      id: '/#about',
      name: t('About'),
      children: ['link', 'link'],
    },
    {
      id: '/#contact',
      name: t('contact'),
      children: null,
    },
  ]
  console.log(isSticky)
  return (
    <>
      {links.map((e, i) => (
        <Box
          key={i}
          className={`nav-link ${e.children && 'children-link'}`}
          position={'relative'}
        >
          <Stack direction={'row'} gap="15px" alignItems="center">
            <Link
              smooth
              href={e.id}
              onClick={() => setIsActive(i)}
              sx={{
                color: isSticky ? '#707070' : 'white',
                textDecoration: 'none',
                fontSize: { md: '20px', sm: '2vw' },
              }}
              className="arrow-nav-link"
              key={i}
            >
              {e.name}
            </Link>
            {e.children ? (
              <ArrowDropDownIcon
                className="arrow-nav-link"
                sx={{ color: isSticky ? '#707070' : 'white' }}
              />
            ) : (
              ''
            )}
          </Stack>
        </Box>
      ))}
    </>
  )
}

export default Links
