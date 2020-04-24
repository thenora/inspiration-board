import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const cards = CARD_DATA.cards.map ((card) => {
  return  (
    <Card text={card.text} emoji={card.emoji}/>
  )
})
const Board = () => {
  return (
    <div>
      Board
      {cards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
