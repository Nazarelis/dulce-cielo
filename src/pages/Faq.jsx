import AccordionList from "../components/accordion";
function FaqPage() {
  return (
    <div className="flex justify-center flex-col mb-20 items-center">
    <h1 className="text-2xl md:text-5xl font-bold font-cinzel text-center text-[#4F4F4F] mt-20 mb-12">Preguntas Frecuentes</h1>
    <AccordionList/>
    </div>

  );
}

export default FaqPage
