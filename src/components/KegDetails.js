import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit } = props;
  return(
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name} - {keg.flavor}</h3>
      <h5>{keg.brand}</h5>
      <p><em>Pint price: ${keg.price}.00</em></p>
      <p><em>Pints left: {keg.pintsLeft}</em></p>
      <button onClick={()=> onClickingDelete(keg.id)}>Delete Keg</button>
      <button onClick={()=> onClickingEdit}>Update Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;