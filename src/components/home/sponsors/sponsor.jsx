import React from 'react';
import './sponsor.css';
import Slider from 'react-slick';


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}


const sponsor = importAll(require.context('../../../assets/logos', false, /\.(png|jpe?g|svg)$/));


console.log(sponsor);
const Sponsors = () => {
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          autoplay: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
        }
      }
    ]
  }
  const jsx = Object.keys(sponsor).map((s, id) =>
    <div key={id} className="sponsor-div">
      <img src={sponsor[s]} width="200px" />
      <h5 className="sponsor-tag text-center font-weight-bold">{s.split('.')[0].split("_").join(" ")}</h5>
    </div>)
  return (
    <div className="container">
      <br /><br />
      <h1 className="text-center font-weight-bold">Our Sponsors</h1>
      <br /><br />
      <Slider {...settings}>
        {jsx}
      </Slider>
      <br /><br />
    </div>
  )
}

export default Sponsors;
