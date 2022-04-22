import React from "react";
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <React.Fragment>
      <div onClick = {()=> props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.flavor}</h3>
        <p><em>Pint price : $ {props.price}.00</em></p>
        <p><em>Pints left: {props.pintsLeft}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string.isRequired,
  pintsLeft: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
};

export default Keg;