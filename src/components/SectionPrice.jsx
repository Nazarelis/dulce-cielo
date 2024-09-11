import iconCake from "../assets/icon-cake.png"
import iconSlide from "../assets/icon-slide-cake.png"
import iconPhoto from "../assets/icon-photo.png"
import Button from "../components/button"


function SectionPrice() {
    return (
        <>
        <div className="flex w-full items-center h-screen mt-24 flex-col">
            <h1 className="text-4xl font-cinzel mb-4 font-bold text-[#12767B]">¿CÓMO COTIZAR EN DULCE CIELO?</h1>
            
            <div className="flex mt-12 ">
                
                <div className="w-40 h-56 bg-[#F959A3] flex items-center justify-evenly flex-col rounded-[40px]">
                    <img src={iconSlide} alt="" className="w-20"/>
                    <h2 className="text-center text-sm text-[#F2F2F2]">Define <br/> la cantidad <br/> de porciones que <br/> necesitas</h2>
                </div>
                
                <div className="w-40 h-56 bg-[#F959A3] flex md:ml-12 md:mr-12 items-center justify-evenly flex-col rounded-[40px]">
                    <img src={iconCake} alt="" className="w-20"/>
                    <h2 className="text-center text-sm text-[#F2F2F2]">Elige <br/> el sabor <br/> del bizcocho y <br/> relleno</h2>
                </div>
               
                <div className="w-40 h-56 bg-[#F959A3] flex items-center justify-evenly flex-col rounded-[40px]">
                    <img src={iconPhoto} alt="" className="w-20"/>
                    <h2 className="text-center text-sm text-[#F2F2F2]">Envía <br/> un modelo de <br/> referencia</h2>
                </div>
            </div>

            <div className='w-full flex justify-center pb-12'>
                <Button backgroundColor='bg-[#D34285]' textSize='text-sm' hoverTextColor='hover:text-[#D34285]' to='/faq' 
                text='Ver preguntas frecuentes' borderColor='border-[#D34285]' />
            </div>        
            
            </div>
        

        </>
    )}

export default SectionPrice