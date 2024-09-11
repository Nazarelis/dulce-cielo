import iconCup1 from '../assets/iconCupcake1.png'
import iconCup2 from '../assets/iconCupcake2.png'
import iconT1 from '../assets/iconText1.png'
import iconT2 from '../assets/iconText2.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

const data = [
  {
    id: 1,
    text: "Te escribo para agradecerte, ¡quedó divina!, además de sabrosa. Cuando la probaron mis invitados quedaron como ‘oh, está buenisima’. Ya me tienes como cliente definitivamente"
  },
  {
    id: 2,
    text: "Muchas gracias por la torta, ¡te pasaste estaba buenisima! A toda mi familia le fascinó. Y ni que decir de la decoración, ¡hermosisíma! Muchas gracias nuevamente <3"
  },
  {
    id: 3,
    text: "tercer comentario"
  }
];

function SectionOpinions() {
    const settings = {
        dots: true,
        autoplay:true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <>
      <div className="w-full h-screen flex-col items-center flex relative overflow-hidden">
        <div>
          <h1 className="md:text-3xl text-2xl text-center md:text-normal text-[#4F4F4F] mt-20 font-merriweather font-bold md:mb-24">
            Lo que dicen nuestros clientes
          </h1>
        </div>
        <img
          src={iconCup1}
          className="hidden md:block absolute top-40 left-0 h-1/2 object-cover"
        />
        <img
          src={iconCup2}
          className="hidden md:block absolute top-40 right-0 h-1/2 object-cover"
        />
        <div className='w-1/2 block ml-4 mr-4 '>
        <Slider {...settings}>
          {data.map((item) => (
              <div key={item.id} className='p-12  mb-10 pl-12 pr-12 rounded-[40px] relative bg-[#F959A3] flex items-center justify-center'>
                <p className='text-[#F2F2F2] text-center text-xs md:text-xl font-merriweather'>
                  {item.text}
                </p>
                <img src={iconT1} className='max-w-full absolute md:top-4 md:left-8 w-8' />
                <img src={iconT2} className='max-w-full absolute md:bottom-4 md:right-8 w-8' />
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default SectionOpinions;

