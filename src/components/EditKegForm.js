import React from "react";
import Form from "./Form";
import PropTypes from "prop-types";

function EditKegForm(props){
  return(
    <React.Fragment>
      <Form
      buttonText = "Update Keg"/>
    </React.Fragment>
  );
}
EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func,
}
export default EditKegForm;