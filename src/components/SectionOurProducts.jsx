import shotCake from '../assets/shot-cakes.jpg'
import cake from '../assets/cake.jpeg'
import ramo from '../assets/ramo.jpeg'
import Button from './button'

import iconCake from '../assets/icon-cake.png'
import iconRamo from '../assets/icon-flowers.png'
import iconShot from '../assets/icon-shotcake.png'
import { Link } from 'react-router-dom'

function OurProducts (){
    return(
        <>
        <div className='w-full flex justify-evenly flex-col'>
            <div className='flex items-center flex-col'>
                <h2 className='md:text-5xl text-2xl font-bold font-cinzel text-center text-[#D34285] mt-16'>
                    CONOCE NUESTROS PRODUCTOS
                </h2>
                <h3 className='text-[#4F4F4F] font-merriweather text-center text-sm md:text-3xl pt-4 '>
                Hechos con mucho amor y dedicación para tí
                </h3>
            </div>

            <div className='flex flex-col md:flex-row w-full justify-center items-center pt-10'>
            
                <div className=' flex flex-col items-center justify-start relative '>
                    <img src={cake} alt="" className='w-44 h-40 rounded-[40px] relative'/>
                    <Link to='/products' className='absolute inset-0 bg-[#F959A3] w-44 h-40 rounded-[40px] flex justify-center items-center opacity-0 hover:opacity-80 transition-opacity duration-300'>
                        <img src={iconCake} alt="icon cake" className='w-28' />
                    </Link>
                    <p className='text-[#12767B] font-merriweather text-xl text-center pt-4'>Tortas <br/> Personalizadas</p>
                </div>


                <div className='flex flex-col items-center justify-start relative ml-20 mr-20 md:mt-0 md:mb-0 mb-10 mt-10'>
                    <img src={shotCake} alt="" className='w-44 h-40 rounded-[40px]'/>
                    <Link to='/products' className='absolute inset-0 bg-[#F959A3] w-44 h-40 rounded-[40px] flex justify-center items-center opacity-0 hover:opacity-80 transition-opacity duration-300'>
                        <img src={iconShot} alt="icon cake" className='w-28' />
                    </Link>
                    <p className='text-[#12767B] font-merriweather text-xl  text-center pt-4 md:h-16 flex items-center'>Postres en Shot</p>
                </div>



                <div className=' flex flex-col items-center justify-start relative'>
                    <img src={ramo} alt="" className='w-44 h-40 rounded-[40px] relative'/>

                    <Link to='/products' className='absolute inset-0 bg-[#F959A3] w-44 h-40 rounded-[40px] flex justify-center items-center opacity-0 hover:opacity-80 transition-opacity duration-300'>
                        <img src={iconRamo} alt="icon cake" className='w-20' />
                    </Link>
                    
                    <p className='text-[#12767B] font-merriweather text-xl items-center flex text-center pt-4 md:h-16 flex items-center'>Arreglos Florales</p>
                </div>

            </div>


            <div className='w-full flex justify-center pb-12'>
                <Button backgroundColor='bg-[#D34285]' textSize='text-sm' hoverTextColor='hover:text-[#D34285]' to='/products' 
                text='Descúbrelos' borderColor='border-[#D34285]' />
            </div>


        </div>
        </>
    )
}

export default OurProducts