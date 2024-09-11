import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ backgroundColor, textSize, to, text, borderColor, hoverTextColor }) {
  return ( 
    <Link 
      to={to} 
      className={`inline-block px-4 py-2 mt-10 font-cinzel font-semibold rounded-full text-white ${hoverTextColor} ${backgroundColor} ${textSize} transition duration-300 ease-in-out transform hover:scale-105 hover:bg-transparent border-4 ${borderColor}`}
    >
      {text}
    </Link>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  textSize: PropTypes.string,
  to: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  borderColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
};

export default Button;