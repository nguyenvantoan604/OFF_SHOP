import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./SliderImg.css"
import { SliderImgs } from './img';

const SliderImg = () => {

    const settingImg = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    
  return (
    <div className='SliderImg'>
        <Slider {...settingImg}>
            {SliderImgs.map((img,index) =>
                <img src={img.url} alt={img.url} key={index}/>
                )}
        </Slider>
    </div> 
  );
}



export default SliderImg