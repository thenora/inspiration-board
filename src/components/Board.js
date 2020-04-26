import React, { Component, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';
const BASE_URL = 'https://inspiration-board.herokuapp.com/boards/nora-antonia';

const Board = (props) => {
  
  // const cards = CARD_DATA.cards.map ((card) => {
  //   return  (
  //     <Card 
  //       text={card.text} 
  //       emoji={card.emoji}
  //     />
  //   )
  // })
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // do we need to put this inside a const variable?
  useEffect(() => {
      axios.get(BASE_URL + '/cards')
      .then((response) => {
        // Get the list of students
      const boardCards = response.data.map ((card) => {
        return (
      <Card
        text={card.card.text} 
        emojiName={card.card.emoji}
        id={card.card.emoji}
        onDelete={props.onDelete}
      />
    );
  });
        
        setCards(boardCards)
      })
      .catch((error) => {
        // Still need to handle errors
        setErrorMessage(error.message);
      });
  }, []);

  


  return (
    <div className="board">
      {props.errorMessage ? 
        <ul className="validation-errors-display">
          <li className="validation-errors-display__list">{props.errorMessage}</li>
        </ul> : ''}
        {cards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;