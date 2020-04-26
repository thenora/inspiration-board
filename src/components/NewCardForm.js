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
      // line 46 is equivalent to: newCardInfo[name] = value
    };
  
    setNewCard(newCardInfo);
  };

  const onFormSubmit = event => {
    // prevent browser from trying to submit form
    event.preventDefault();

    // if (newCard.text === "") {
    //   alert("Oops! Please enter an encouraging message.");
    //   return;
    // };

    // take props from button click to create new card info
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

        {/* Looks better without label */}
        {/* <label className="new-card-form__form-label" htmlFor="text">Text</label> */}
        <input 
          className="new-card-form__form-textarea" 
          type="text"
          placeholder="An encouraging message" 
          name="text"
          value={newCard.text}
          onChange={onInputChange} />

        {/* <label className="new-card-form__form-label" htmlFor="emoji">Emoji name</label> */}
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