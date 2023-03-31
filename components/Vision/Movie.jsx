import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import ShowMoreBtn from '../ShowMoreBtn'
const Project = ({ item, i }) => {
  return (
    <Container style={{ marginTop: i % 2 === 0 && '70px' }} className="project">
      <Stack
        // p={'20px 0'}
        margin={' 0px auto'}
        alignItems={'center'}
        justifyContent={'center'}
        width="350px"
        sx={{ height: '100%', borderRadius: '20px' }}
        className="vision-card"
      >
        <Stack width={'100%'} height={'100%'} className="inner-vision-card">
          <Stack
            sx={{
              background: `url(${item.large_cover_image})`,
              width: '100%',
              height: '90%',
              borderRadius: '20px',
            }}
            className="flip-card-front"
          >
            <Stack
              alignItems={'flex-end'}
              p="20px"
              height={'100%'}
              direction={'row'}
            >
              <Stack
                direction={'row'}
                width={'100%'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Typography
                  sx={{
                    maxWidth: '250px',
                    color: 'white',
                    fontSize: '25px',
                    fontWeight: '700',
                  }}
                >
                  {item.title}
                </Typography>
                <IconButton
                  sx={{ border: '0.1rem solid #24b4ba', padding: '20px' }}
                >
                  <ArrowOutwardIcon sx={{ color: '#24b4ba' }} />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            sx={{
              background: `white`,
              width: '100%',
              height: '90%',
              borderRadius: '20px',
              padding: '30px',
            }}
            justifyContent={'space-between'}
            className="flip-card-back"
          >
            <Stack gap={'20px'}>
              <img
                style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                src={item.large_cover_image}
                alt=""
              />
              <Typography
                sx={{ fontSize: '35px', fontWeight: '700', color: '#264380' }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{ fontSize: '18px', fontWeight: '400', color: '#264380' }}
              >
                {item.summary.slice(0, 100)}
              </Typography>
            </Stack>
            <Box display={'flex'} justifyContent={'flex-end'}>
              <ShowMoreBtn />
            </Box>
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
