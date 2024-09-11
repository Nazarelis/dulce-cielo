import { Link } from 'react-router-dom';
import Logo from '../assets/logo-sin-fondo.png';

function Navbar() {
  return (
    <div className="flex w-full h-24 text-[#12767B] items-center justify-evenly bg-[#ECF4F5] ">
      <Link to="/products" className="text-lg hover:text-[#D34285] hover:underline underline-offset-8 decoration-2 decoration-[#52989C]">Productos</Link>
      <Link to="/about" className="text-lg hover:text-[#D34285] hover:underline underline-offset-8 decoration-2 decoration-[#52989C]">Nuestra Historia</Link>
      <Link to="/" className="flex items-center justify-center" >
      <img src={Logo} alt="Logo" className="w-52 h-52" />
      </Link>
      <Link to="/faq" className="text-lg hover:text-[#D34285] hover:underline underline-offset-8 decoration-2 decoration-[#52989C]">Preguntas Frecuentes</Link>
      <Link to="/contact" className="text-lg hover:text-[#D34285] hover:underline underline-offset-8 decoration-2 decoration-[#52989C]">Contacto</Link>
    </div>
  );
}

export default Navbar;