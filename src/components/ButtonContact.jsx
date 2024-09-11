import PropTypes from 'prop-types';

function ButtonContact({ backgroundColor, textSize, to, text, borderColor }) {
  return (
    <a
      href={to} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`inline-block px-4 py-2 mt-10 font-cinzel font-bold rounded-full text-white ${backgroundColor} ${textSize} transition duration-300 ease-in-out transform hover:scale-105 hover:bg-transparent border-4 ${borderColor}`}
    > 
      {text}
    </a>
  );
}

ButtonContact.propTypes = {
  backgroundColor: PropTypes.string,
  textSize: PropTypes.string,
  to: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  borderColor: PropTypes.string,
};

export default ButtonContact;