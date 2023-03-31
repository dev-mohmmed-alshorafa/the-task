import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
const Project = ({ item, i }) => {
  return (
    <Container className="project">
      <Stack
        // p={'20px 0'}
        margin={' 0px auto'}
        // alignItems={'center'}
        justifyContent={'center'}
        width="350px"
        sx={{ height: '100%', borderRadius: '20px' }}
        className="vision-card"
      >
        <Stack width={'100%'} height={'100%'}>
          <Stack
            sx={{
              background: `linear-gradient(to top, #24b4ba 30%, transparent 60%),url(${item.large_cover_image})`,
              width: '100%',
              height: '90%',
              borderRadius: '20px',
            }}
            // className="flip-card-front"
          >
            <Stack
              p="20px"
              height={'100%'}
              // direction={'row'}
              justifyContent={'space-between'}
            >
              <Box
              
                display={'flex'} 
              >
                <Typography   sx={{
                  background: 'rgba(0,0,0,.12)',
                  padding: '5px 15px',
                  borderRadius: '20px',
                }} color={'white'}>Vision 2023</Typography>
              </Box>
              <Stack gap={'30px'}>
                <Typography sx={{color:'white'}}>{item.summary.slice(0, 100)}</Typography>
                <Stack
                  justifyContent={'flex-end'}
                  alignItems={'center'}
                  direction={'row'}
                  gap="15px"
                >
                  <Typography sx={{ color: 'white' }}>View Datail</Typography>
                  <IconButton sx={{ border: '0.2rem solid white' }}>
                    <ArrowForwardIcon sx={{ color: 'white' }} />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Project

const Container = styled.div`
  height: 600px;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  display: flex;
  justifycontent: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    transition: all 400ms ease-in-out;
    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;
      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }

  :hover > img {
    transform: scale(1.3);
  }

  :hover > .disc {
    bottom: 0;
  }
`
