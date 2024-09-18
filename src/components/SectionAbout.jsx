import Button from "./button"
import fondo from "../assets/Group1.png"
import fondo2 from "../assets/Group2.png"



function SectionAbout() {
    return (
        <>
        <div className="w-full flex md:h-screen flex-col md:flex-row items-center relative">
            <div className="flex flex-col w-4/5 items-center">
                <div className="flex flex-col w-4/6">
                    <h1 className="text-[#4F4F4F] font-cinzel font-bold text-2xl tracking-widest md:text-4xl">¡Hola, me llamo Wilyeisy!</h1>
                    <p className="text-[#D34285] font-cinzel font-bold text-2xl pt-2">Y soy la creadora de Dulce Cielo</p>
                </div>
            <div className="w-4/6 mt-8">
                <p className="w-11/12 text-lg text-[#4F4F4F]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                </p>
                <p className="w-4/5 text-lg md:mt-8 md:mb-8 text-[#4F4F4F]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
                <p className="w-11/12 text-lg text-[#4F4F4F]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
                <div className="flex w-3/6 justify-center">
                    <Button backgroundColor='bg-[#D34285]' textSize='text-xs' hoverTextColor='hover:text-[#D34285]' to='/about' 
                        text='Conoce mi historia' borderColor='border-[#D34285]'/>
                </div>
            </div>
            </div>

            <div className="w-1/6 "> 
                <img src={fondo} alt="" className="w-2/6 absolute top-2/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 hidden md:block" /> 
                <img src={fondo2} alt="" className="w-2/6 block md:hidden" /> 
            </div>


        </div>


        </>
    )}
export default SectionAbout