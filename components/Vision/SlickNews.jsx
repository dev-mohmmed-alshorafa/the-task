import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import Project from './Movie'
import styled from 'styled-components'
import fetchData from '@/pages/data'

var settings = {
  className: 'center',
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
}
const SliderComp = () => {
  const [slider, setSlider] = useState([])
  const getData = async () => {
    const data = await fetchData()
    setSlider(data.data?.movies)
  }
  useEffect(() => {
    getData()
  }, [])
  const arrowRef = useRef(null)
  let sliderProject = ''
  sliderProject = slider.map((item, i) => <Project i={i} item={item} key={i} />)
  return (
    <>
      <Container style={{ width: '1200px' }}>
        <Slider ref={arrowRef} {...settings}>
          {sliderProject}
        </Slider>
        {/* <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
f        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
d        </button>
      </Buttons> */}
      </Container>
    </>
  )
}

export default SliderComp

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`
