import Button from "./button"
import fondo from "../assets/Group1.png"
import fondo2 from "../assets/Group2.png"



function SectionAbout() {
    return (
        <>
        <div className="w-full flex md:h-screen flex-col md:flex-row items-center mb-10 relative">
            <div className="flex flex-col w-4/5 md:mt-12 md:mb-12 items-center justify-center ">
                <div className="flex flex-col items-center justify-center md:items-start w-4/6">
                    <h1 className="text-[#4F4F4F] text-center md:text-start font-cinzel font-bold text-2xl black md:text-2xl tracking-widest md:text-4xl">¡Hola, me llamo Wilyeisy!</h1>
                    <p className="text-[#D34285] font-cinzel text-center md:text-start font-bold text-xl md:text-2xl pt-2">Y soy la creadora de Dulce Cielo</p>
                </div>
            <div className="md:w-4/6 md:mt-8">
                <p className="md:w-11/12 md:text-lg text-[#4F4F4F] text-justify pt-8 md:pt-0">
                Nacimos con la misión de endulzar tus momentos más especiales. Lo que empezó como un pequeño emprendimiento vendiendo porciones de torta tres leches, se ha convertido en un lugar donde cada postre está hecho con amor y dedicación. 
                </p>
                <p className="md:w-4/5 md:text-lg text-j md:mt-8 md:mb-8 text-justify text-[#4F4F4F] pt-8 md:pt-0">
                Desde nuestros inicios en Venezuela, la repostería siempre ha sido una forma de compartir felicidad. Al llegar a Chile, decidí seguir este sueño, con el objetivo de hacer que cada uno de tus momentos sea único y memorable. 
                </p>
                <p className="md:w-11/12 md:text-lg text-[#4F4F4F] text-justify pt-8 md:pt-0">
                En Dulce Cielo, cada detalle está pensado para que disfrutes una experiencia dulce e inolvidable.
                </p>
                <div className="flex w-3/6 justify-center md:block hidden">
                    <Button backgroundColor='bg-[#D34285]' textSize='text-xs' hoverTextColor='hover:text-[#D34285]' to='/about' 
                        text='Conoce mi historia' borderColor='border-[#D34285]'/>
                </div>
            </div>
            </div>

            <div className="md:w-1/6 w-full flex justify-center"> 
                <img src={fondo} alt="" className="w-2/6 absolute top-2/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 hidden md:block" /> 
                <img src={fondo2} alt="" className="w-5/6 block md:hidden" /> 
            </div>

            <div className="flex w-3/6 justify-center md:hidden ">
                    <Button backgroundColor='bg-[#D34285]' textSize='text-xs' hoverTextColor='hover:text-[#D34285]' to='/about' 
                        text='Conoce mi historia' borderColor='border-[#D34285]'/>
                </div>


        </div>


        </>
    )}
export default SectionAbout