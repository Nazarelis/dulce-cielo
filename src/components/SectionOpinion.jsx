import iconCup1 from '../assets/iconCupcake1.png'
import iconCup2 from '../assets/iconCupcake2.png'


 
function SectionOpinions() {
    return (
        <>
        <div className="w-full h-screen justify-center flex relative">
            <h1 className="text-3xl text-[#4F4F4F] mt-20 font-merriweather font-bold">Lo que dicen nuestros clientes</h1>
            <img src={iconCup1} className="hidden md:block absolute top-40 left-0 h-1/2  object-cover"/>
            <img src={iconCup2} className="hidden md:block absolute top-40 right-0 h-1/2  object-cover "/>
        </div>
        
        </>
    )}

export default SectionOpinions