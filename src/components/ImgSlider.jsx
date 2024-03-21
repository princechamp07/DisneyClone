import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';
import './custom.css'

const ImgSlider =() => {

    let settings ={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }

    return (
        (
            <Slider className='Slider' {...settings} >
                <div className='Wrap'>
                  <a>
                    <img src="./images/images/slider-badging.jpg" alt="" />
                  </a>
                </div>
                <div className='Wrap'>
                  <a>
                    <img src="./images/images/slider-badag.jpg" alt="" />
                  </a>
                </div>
                <div className='Wrap'>
                  <a>
                    <img src="./images/images/slider-scale.jpg" alt="" />
                  </a>
                </div>
                <div className='Wrap'>
                  <a>
                    <img src="./images/images/slider-scales.jpg" alt="" />
                  </a>
                </div>
            </Slider>
        )
    );

    
}


export default ImgSlider;