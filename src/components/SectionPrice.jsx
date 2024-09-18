import iconCake from "../assets/icon-cake.png"
import iconSlide from "../assets/icon-slide-cake.png"
import iconPhoto from "../assets/icon-photo.png"
import Button from "../components/button"


function SectionPrice() {
    return (
        <>
        <div className="flex w-full items-center justify-center h-screen flex-col">
            <h1 className="text-4xl font-cinzel mb-2 font-bold text-[#4F4F4F]">¿CÓMO COTIZAR EN DULCE CIELO?</h1>
            
            <div className="flex mt-12  w-1/2 justify-evenly">
                
                <div className="w-40 h-56  flex items-center justify-evenly flex-col ">
                    <div className="bg-[#F959A3] w-28 flex justify-center items-center rounded-full h-28">
                    <img src={iconSlide} alt="" className="w-20 h-20"/>
                    </div>
                    <h2 className="text-center text-4 font-semibold text-[#4F4F4F]">Define la cantidad <br/> de porciones que <br/> necesitas</h2>
                </div>

                <div className="w-40 h-56  flex items-center justify-evenly flex-col ">
                    <div className="bg-[#F959A3] w-28 flex justify-center items-center rounded-full h-28">
                    <img src={iconCake} alt="" className="w-16 h-16"/>
                    </div>
                    <h2 className="text-center text-4 font-semibold text-[#4F4F4F]">Elige el sabor <br/> del bizcocho y <br/> relleno</h2>
                </div>

                <div className="w-40 h-56 flex items-center justify-evenly flex-col ">
                    <div className="bg-[#F959A3] w-28 flex justify-center items-center rounded-full h-28">
                    <img src={iconPhoto} alt="" className="w-20 h-16"/>
                    </div>
                    
                    <h2 className="text-center text-4 font-semibold text-[#4F4F4F]">Envía <br/> un modelo de <br/> referencia</h2>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <Button backgroundColor='bg-[#D34285]' textSize='text-sm' hoverTextColor='hover:text-[#D34285]' to='/faq' 
                text='Ver preguntas frecuentes' borderColor='border-[#D34285]' />
            </div>        
            
            </div>
        

        </>
    )}

export default SectionPrice