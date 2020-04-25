import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = ( {url, boardName} ) => {

    const cards = CARD_DATA.cards.map ((card) => {
    return  (
      <Card 
        text={card.text} 
        emoji={card.emoji}
      />
    );
  });

  useEffect(() => {
    axios.get(`${url}+${boardName}/cards`)
    .then(response => {
      response.data.map(card => 
        <Card
          text={card.card.text}
          emojiText={card.card.emoji}
          id={card.card.id}
          />
      )
    }).catch(error => {
      console.log(error.cause);
    })
  }, []);

  return (
    <div className="board">
      {cards}
    </div>
  )
};

Board.propTypes = {

};

export default Board;
