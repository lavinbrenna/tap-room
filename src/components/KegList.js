import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
  <React.Fragment>
    <hr/>
    {props.kegList.map((keg, index)=>
    <React.Fragment>
      <Keg
        whenKegClicked = {props.onKegSelection}
        name = {keg.name}
        brand= {keg.brand}
        price = {keg.price}
        flavor = {keg.flavor}
        pintsLeft = {keg.pintsLeft}
        id={keg.id}
        key={keg.id}
        />
        <button>Sell Pint</button>
        <hr/>
      </React.Fragment>
    )}
    
  </React.Fragment>
  );
}

KegList.propTypes ={
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  // onClickingSellPint: PropTypes.func
};

export default KegList;