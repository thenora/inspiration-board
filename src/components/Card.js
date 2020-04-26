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
      props.onClickCallback(props.id)
    }


  return (
    <div className="card">
      <div className="card__content">
        <p className=".card__content-text">{ props.text }</p>
        <p className="card__content-emoji">{ emojiSymbol(props.emojiName) }</p>
        <button className="card__delete" onClick={buttonClick}>Delete</button>
      </div>
    </div>
  )
}

Card.propTypes = {

};

export default Card;