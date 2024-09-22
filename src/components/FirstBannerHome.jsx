import React from 'react';
import Slider from 'react-slick';
import imgBanner1 from '../assets/2147840360.jpg';  // Primera imagen del carrusel
import imgBanner2 from '../assets/entregas.jpg';  // Segunda imagen del carrusel
import imgBanner3 from '../assets/flores-banner-dos.jpg';  // Tercera imagen del carrusel
import ButtonContact from './button';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';  // Importar iconos de flechas

// Componente para la flecha izquierda
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 top-1/2 left-4 ml-4 cursor-pointer"
      onClick={onClick}
    >
      <GoChevronLeft size={35} color="#F3F3F3" />
    </div>
  );
}


function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 top-1/2 right-4 mr-4 cursor-pointer"
      onClick={onClick}
    >
      <GoChevronRight size={35} color="#F3F3F3" />
    </div>
  );
}

function FirstBanner() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: <PrevArrow />,  
    nextArrow: <NextArrow />, 
  };

  return (
    <div className="w-full h-screen">
      <Slider {...settings}>

        <div className="relative w-full h-screen">
          <img src={imgBanner1} alt="cake" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-start pl-48 justify-center text-white bg-black bg-opacity-10">
            <h1 className="md:leading-relaxed text-4xl font-cinzel font-bold md:text-5xl text-[#12767B] flex text-start h-auto">
              ENDULZA <br /> TU DÍA CON <br /> UN TOQUE DE <br /> MAGIA
            </h1>
            <p className="text-lg md:text-xl text-[#F4F4F4] font-merriweather text-start mt-4">
              Dejanos ser parte de tus momentos especiales <br /> con nuestros deliciosos postres
            </p>
            <ButtonContact backgroundColor='bg-[#D34285]' textSize='text-sm' to='https://wa.me/56936725421' text='RESERVA AHORA' borderColor='border-[#D34285]'/>
          </div>
        </div>



        <div className="relative w-full h-screen">
          <img src={imgBanner3} alt="Arreglos Florales" className="w-full h-full object-cover opacity-80 saturate-100" />
          <div className="absolute inset-0 flex flex-col items-start pl-48 justify-center text-white bg-black bg-opacity-10">
            <h1 className="md:leading-relaxed text-4xl font-cinzel font-bold md:text-5xl text-[#F3F3F3] flex text-start h-auto">
               MÁS QUE <br/>  SOLO DULCES <br/>  POSTRES
            </h1>
            <p className="text-lg md:text-xl text-[#F2F2F2] font-merriweather text-start mt-4">
              Complementa tus tortas con globos de <br /> helio  y hermosos arreglos florales
            </p>
            <ButtonContact backgroundColor='bg-[#D34285]' textSize='text-sm' to='https://wa.me/56936725421' text='EXPLORA' borderColor='border-[#D34285]'/>
          </div>
        </div>

        <div className="relative w-full h-screen">
          <img src={imgBanner2} alt="Envios" className="w-full h-full object-cover  opacity-80 saturate-100" />
          <div className="absolute inset-0 flex flex-col items-start pl-48 justify-center text-white bg-black bg-opacity-10">
            <h1 className="md:leading-relaxed text-4xl font-cinzel font-bold md:text-5xl text-[#F2F2F2] flex text-start h-auto">
             TE LLEVAMOS <br/> TU PEDIDO <br/> HASTA TU <br/> HOGAR 
            </h1>
            <p className="text-lg md:text-xl text-[#F4F4F4] font-merriweather text-start mt-4">
            Entregamos dulzura a todas las <br/> comunas de Santiago            </p>
            <ButtonContact backgroundColor='bg-[#D34285]' textSize='text-sm' to='https://wa.me/56936725421' text='ORDENA AHORA' borderColor='border-[#D34285]'/>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default FirstBanner;


