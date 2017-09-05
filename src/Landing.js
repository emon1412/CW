import React from 'react'
import Slider from 'react-slick'
import slide1 from './images/cleanCar1.jpg'
import slide2 from './images/cleanCar2.jpg'
import slide3 from './images/cleanCar3.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


class Landing extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="carousel">
      <Slider {...settings}>
        <div><img className="carouselSlide" src={slide1} /></div>
        <div><img className="carouselSlide" src={slide2} /></div>
        <div><img className="carouselSlide" src={slide3} /></div>
      </Slider>
      </div>
    );
  }
}

export default Landing
