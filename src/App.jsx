import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Working from "./pages/Working";
import Footer from "./components/Footer";
import FaqPage from "./pages/Faq";
import ContactPage from "./pages/Contac"; 


function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Working />} />
        <Route path="/products" element={<Working />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
