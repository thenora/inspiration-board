import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

const Card = ({ text, emojiName, id, onDelete }) => {


  // convert name to unicode symbol if not empty
  const emojiSymbol = (emojiName) => {
    if (emojiName) {
      return emoji.getUnicode(emojiName);
    } else {
      return "";
    }
  };

  const deleteCard = () => {
    onDelete(id);
  };
 

  return (
    <div className="card">
      <div className="card__content">
        <p className=".card__content-text">{ text }</p>
        <p className="card__content-emoji">{ emojiSymbol(emojiName) }</p>
        <input className="card__delete" type="submit" value="delete" onClick={deleteCard} />
      </div>
    </div>
  )
}

Card.propTypes = {

};

export default Card;