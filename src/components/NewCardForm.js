import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
  const [newCard, setNewCard] = useState({
    text: "",
    emoji: ""
  });

  const onInputChange = event => {
    const { name, value } = event.target;

    const newCardInfo = {
      ...newCard,
      [name]: value // [name] get value of name and use it as the key | value is the variable above
    };
  
    setNewCard(newCardInfo);
  };

  const onFormSubmit = event => {
    // prevent browser from trying to submit form
    event.preventDefault();

    props.onAddCard(newCard);

    // reset input fields
    setNewCard({
      text: "",
      emoji: ""
    });
  };

  return (
    <div className="new-card-form">
      <h3 className="new-card-form__header">Leave some inspiration:</h3>
      <form className="new-card-form__form" onSubmit={onFormSubmit}>

        <input 
          className="new-card-form__form-textarea" 
          type="text"
          placeholder="An encouraging message" 
          name="text"
          value={newCard.text}
          onChange={onInputChange} />

        <input 
          className="new-card-form__form-textarea"
          placeholder="emoji name" 
          type="text" 
          name="emoji" 
          value={newCard.emoji}
          onChange={onInputChange} />
      
        <input 
          className="new-card-form__form-button" 
          type="submit" 
          value="Add note" 
          onSubmit={onFormSubmit} />

      </form>

    </div>
  )
};

NewCardForm.propTypes = {
  onAddCard: PropTypes.func.isRequired
};

export default NewCardForm;