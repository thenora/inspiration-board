import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

const Card = (props) => {


    // convert name to unicode symbol if not empty
    const emojiSymbol = (emojiName) => {
      if (emojiName) {
        return emoji.getUnicode(emojiName);
      } else {
        return "";
      }
    };
    const buttonClick = () => {
      props.onDeleteCallback(props.id)
    }


  return (
    <div className="card">
      <div className="card__content">
        
        <p className=".card__content-text">{ props.text }</p>
        <p className="card__content-emoji">{ emojiSymbol(props.emojiName) }</p>
        
      </div>
      <button className="card__delete" onClick={buttonClick}>X</button>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emojiName: PropTypes.string,
  onDeleteCallback: PropTypes.func.isRequired
};

export default Card;