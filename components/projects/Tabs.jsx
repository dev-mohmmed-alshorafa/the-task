import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Tabs({ setIsActiveTab, isActiveTab }) {
  const tabs = ['NEOM', 'the Red Sea', 'ROSHN']
  return (
    <Stack
      p={{md:'50px 100px'}}
      width={{ md: '40vw', xs: '100vw' }}
      sx={{ background: '#b3bdc1' }}
      gap={'50px'}
      alignItems={{md:'flex-start',xs:'center'}}
    >
      <Typography
        sx={{
          fontSize:{ md:'55px',xs:'30px'},
          textAlign:{ md:'start',xs:'center'},
          maxWidth: '80%',
          color: 'white',
          fontWeight: '700',
        }}
      >
        Vision 2030 Projects
      </Typography>
      <Stack direction={{md:'column',xs:'row'}} gap={'30px'}>
        {tabs.map((e, i) => (
          <Stack className='tabs-projects' direction={{xs:'column',md:'row'}} ml={isActiveTab === e ? '20px' : '0'} alignItems={'center'} gap={'30px'} onClick={() => setIsActiveTab(e)} key={i}>
            <Typography
              sx={{
                fontSize: {md:'35px',xs:'20px'},
                color: isActiveTab === e ? 'white' : '#7f7e7e8f',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              {e}
            </Typography>
            {
             isActiveTab === e && <Box width={{md:'80px',xs:'100%'}} height={'3px'} sx={{background:'white',borderRadius:'8px'}} >

             </Box> 
            }
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
