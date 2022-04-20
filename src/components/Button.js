import React from 'react';
import PropTypes from "prop-types";
import "../style/Button.css";


// destructring propsnya
 const Button = ({variant, text, action })=> {
  return (
 
        <button className={` btn btn-${variant}`} 
        onClick={action}   >
            {text}
        </button>
   
  )
}

// propstype button
Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  action: PropTypes.func
}

export default Button;
