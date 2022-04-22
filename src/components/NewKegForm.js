import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';
import Form from './Form';

function NewKegForm(props){
  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.price.value, pintsLeft: 124, id: v4()});
  }
  return(
    <React.Fragment>
      <Form formSubmissionHandler= {handleNewKegFormSubmission} buttonText="Submit"/>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;