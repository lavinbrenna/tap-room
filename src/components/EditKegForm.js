import React from "react";
import Form from "./Form";
import PropTypes from "prop-types";

function EditKegForm(props){
  const {keg} = props;
  function handleEditKegFormSubmission(event){
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: parseInt(event.target.price.value), flavor: event.target.flavor.value, id: keg.id});
  }
  return(
    <React.Fragment>
      <Form
      formSubmissionHandler ={handleEditKegFormSubmission}
      buttonText = "Update Keg"/>
    </React.Fragment>
  );
}
EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func,
}
export default EditKegForm;