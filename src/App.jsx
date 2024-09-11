import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Working from "./pages/Working";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Working />} />
        <Route path="/products" element={<Working />} />
        <Route path="/faq" element={<Working />} />
        <Route path="/contact" element={<Working />} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
