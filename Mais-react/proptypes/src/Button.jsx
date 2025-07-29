import React from "react";
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button style={{margin: props.margin, width: `${props.width}px`, heigth: `${props.width / 3}px`}}>
      {props.children}
    </button>
  );
};

Button.defaulProps = {
    margin: '10px',
};

Button.PropTypes = {
    width: PropTypes.number.isRequired,
    margin: PropTypes.string,
};

export default Button;