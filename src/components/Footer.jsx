import { Link } from "react-router-dom"
import logoCupcake from '../assets/logoCupcake.png'
import logoWapp from '../assets/iconWapp.png'
import logoIg from '../assets/iconIg.png'
// import logotiktok from '../assets/iconTikTok.png'


function Footer() {
    return (
        <>
        <div className="w-full pl-12 md:flex-row flex-col h-32 bg-[#52989C] flex items-center justify-center">
            <div className="w-1/4 pl-16">
                <Link to='/'>
                    <img src={logoCupcake} alt="" className="w-20"/>
                </Link> 
            </div>
            <div className="flex w-2/4 justify-evenly md:flex-row text-center md-text-normal flex-col ">
            <Link to="/products" className="text-lg text-[#F2F2F2] hover:text-[#D9D9D9] hover:underline underline-offset-8 decoration-2 decoration-[#52989C]">Productos</Link>
            <Link to="/about" className="text-lg text-[#F2F2F2]  hover:text-[#D9D9D9] hover:underline underline-offset-8 decoration-2 decoration-[#52989C]">Nuestra Historia</Link>
            <Link to="/faq" className="text-lg text-[#F2F2F2]  hover:text-[#D9D9D9] hover:underline underline-offset-8 decoration-2 decoration-[#52989C]">Preguntas Frecuentes</Link>
            <Link to="/contact" className="text-lg text-[#F2F2F2]  hover:text-[#D9D9D9] hover:underline underline-offset-8 decoration-2 decoration-[#52989C]">Contacto</Link>
            </div>
            <div className="flex w-1/4 justify-evenly">
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/56936725421">
                    <img src={logoWapp} alt="" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/dulcecielocl/">
                    <img src={logoIg} alt="" />
                </a>
                {/* <a href="https://www.instagram.com/dulcecielocl/">
                    <img src={logotiktok} alt="" />
                </a> */}
            </div>

        </div>
        <div className="w-full bg-[#D9D9D9] h-8 flex justify-center items-center">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anabel-ojeda/">
                <p>Diseñado y Desarrollado por Anabel Ojeda | Copyright © 2024</p>
            </a>
        </div>
            

        
        </>
    )}

export default Footer