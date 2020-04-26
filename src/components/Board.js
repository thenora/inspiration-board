import React, { Component, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';
const BASE_URL = 'https://inspiration-board.herokuapp.com/boards/nora-antonia';

const Board = () => {

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

  const getCards = useCallback(() => {
    axios.get(BASE_URL + '/cards')
      .then((response) => {
        // Get the list of students
        const boardCards = response.data.map((card) => {
          return (
            <Card
              id={card.card.id}
              text={card.card.text}
              emojiName={card.card.emoji}
              onClickCallback={onClickCallback}
            />
          )
        });

        setCards(boardCards)
      })
      .catch((error) => {
        // Still need to handle errors
        setErrorMessage(error.message);
      });
  }, []);

  // moved to add getCards helper method to use with delete and add card 
  useEffect (getCards);
  // useEffect(() => {
  //   axios.get(BASE_URL + '/cards') 
  //     .then((response) => {
  //       // Get the list of students
  //       const boardCards = response.data.map((card) => {
  //         return (
  //           <Card
  //             id={card.card.id}
  //             text={card.card.text}
  //             emojiName={card.card.emoji}
  //             onClickCallback={onClickCallback}
  //           />
  //         )
  //       });

  //       setCards(boardCards)
  //     })
  //     .catch((error) => {
  //       // Still need to handle errors
  //       setErrorMessage(error.message);
  //     });
  // }, []);

  


  // delete
  const onClickCallback = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .then(() => {
        
        //v3 - deletes but doesn't reload
        // const updatedCardList = [...cards]
        
        // for (let i=0; i < updatedCardList.length; i++)
        //   if (id === updatedCardList[i].card.id) {
        //     updatedCardList.splice(i, 1);
        //     setCards(updatedCardList);
        //     return;
        //   };
        
        // v2
        getCards(); // works but weird lag because it recalls the API
        // On thinking about it, when we add a card we'll want to recall the API anyway to get the new card and make sure it published

        // v1 of delete - deletes but leaves blank screen
        
        // const updatedCardList = cards.filter(card =>
        //   card.id === id
        // );
        // setCards(updatedCardList);
        // return;
      })
      
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };


  return (
    <div className="board">
      {cards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;