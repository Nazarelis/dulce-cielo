import imgBanner from '../assets/2147840360.jpg';
import ButtonContact from './button';


function FirstBanner() {
  return ( 
    <div className='relative w-full h-screen'>
      <img src={imgBanner} alt="cake" className='w-full h-full object-cover' />
      <div className='absolute inset-0 flex flex-col items-start pl-48 justify-center text-center text-white bg-black bg-opacity-10'>
        <h1 className='md:leading-relaxed text-4xl font-cinzel font-bold md:text-5xl text-[#12767B] flex text-start h-auto '>
          ENDULZA <br /> TU DÍA CON <br /> UN TOQUE DE <br /> MAGIA
        </h1>
        <p className='text-lg md:text-xl text-[#F4F4F4] font-merriweather text-start mt-4'>
          Dejanos ser parte de tus momentos especiales <br /> con nuestros deliciosos postres
        </p>
        <div>
        <ButtonContact  backgroundColor='bg-[#D34285]' textSize='text-sm' to='https://wa.me/56936725421' 
        text='RESERVA AHORA' borderColor='border-[#D34285]'/>
      </div>
      </div>

    </div>
  );
}

export default FirstBanner;