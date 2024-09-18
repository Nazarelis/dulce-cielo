import { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md mb-4">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
      >
        <span className="text-lg font-medium">{title}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          {/* Icono de flecha */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div className={`transition-max-height duration-500 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-4 bg-white">
          {content}
        </div>
      </div>
    </div>
  );
};

const AccordionList = () => {
  return (
    <div className="max-w-lg mx-auto mt-8">
      <Accordion
        title="¿Tienen alguna politica de cancelación/devolución?"
        content="Se puede cancelar un pedido con mínimo 2 días de anticipación de lo contrario se perdería el abono. No se devuelve dinero se reagenda pero no se hace devolución."
      />
      <Accordion
        title="¿Qué métodos de pagos aceptan?"
        content="Aceptamos transferencia y efectivo."
      />
      <Accordion
        title="¿Haces envíos a domicilio?"
        content="Por supuesto. Contamos con despacho a todas las comunas de Santiago."
      />
    </div>
  );
};

export default AccordionList;
