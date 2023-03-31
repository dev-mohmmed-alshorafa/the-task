import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Tabs({ setIsActiveTab, isActiveTab }) {
  const tabs = [
    'A Vibrant Society',
    'A Thriving Economy',
    'An Ambitious Nation',
  ]
  return (
    <Stack
      p={{ md: '50px 100px' }}
      width={{ md: '40vw', xs: '100vw' }}
      gap={'50px'}
      direction={'row'}
      justifyContent={'center'}
      alignItems={{ md: 'flex-start', xs: 'center' }}
    >
      <Stack direction={{ md: 'column', xs: 'row' }} gap={'30px'}>
        {tabs.map((e, i) => (
          <Stack
            className="tabs-projects" gap={{md:'50px'}}
            direction={{ xs: 'column', md: 'row' }}
            ml={isActiveTab === e ? '20px' : '0'}
            alignItems={'center'}
            onClick={() => setIsActiveTab(e)}
            key={i}
          >
            <Typography
              sx={{
                fontSize: { md: '35px', xs: '16px' },
                color: isActiveTab === e ? '#1f396c' : '#7f7e7e8f',
                fontWeight: '400',
                cursor: 'pointer',
                textAlign: { xs: 'center', md: 'flex-start' },
                width: { md: '200px', xs: 'auto' },
              }}
            >
              {e}
            </Typography>
            {isActiveTab === e && (
              <Stack
                position={'relative'}
                zIndex={2}
                sx={{ background: 'white', width: '100%', padding: '20px 0' }}
              >
                <Box
                  width={{ md: '80px', xs: '100%' }}
                  height={'3px'}
                  sx={{ background: '#1f396c', borderRadius: '8px' }}
                ></Box>
              </Stack>
            )}
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
