import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = () => {
  const [newCard, setNewCard] = useState({
    text: "",
    emoji: ""
  });

  const onInputChange = event => {
    const { name, value } = event.target;

    const newCardInfo = {
      ...newCard,
      [name]: value // [name] get value of name and use it as the key | value is the variable above
      // line 46 is equivalent to: newCardInfo[name] = value
    };
  
    setNewCard(newCardInfo);
  };

  const onFormSubmit = (event) => {
    // prevent browser from trying to submit form
    event.preventDefault();

    // take props from button click to create new card info
    props.onSubmit(newCard);

    // reset input fields
    setNewCard({
      text: "",
      emoji: ""
    });
  };

  return (
    <div className="new-card-form">
      <h3 className="new-card-form__header">Leave some inspiration:</h3>
      <form className="new-card-form__form">

        <label className="new-card-form__form-label" htmlFor="text">Text</label>
        <input 
          className="new-card-form__form-textarea" type="text" 
          name="text" 
          onChange={onInputChange} />

        <label className="new-card-form__form-label" htmlFor="emoji">Emoji name</label>
        <input 
          className="new-card-form__form-textarea" 
          type="text" 
          name="text" 
          onChange={onInputChange} />
      
        <input 
          className="new-card-form__form-button" 
          type="submit" 
          value="Add note" 
          onClick={onFormSubmit} />

      </form>

    </div>
  )
};

Card.propTypes = {

};

export default NewCardForm;