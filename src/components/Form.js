import React from "react";
import PropTypes from "prop-types";

function Form(props){
  return(
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Keg Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand'/>
        <input
        type='number'
        name='price'
        placeholder = 'Pint Price'/>
        <input
        type='text'
        name='flavor'
        placeholder ='Flavor'/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

Form.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default Form;