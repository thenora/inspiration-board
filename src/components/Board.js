import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const BASE_URL = 'https://inspiration-board.herokuapp.com/boards/nora-antonia';

const Board = ({url, boardName}) => {

  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const getCards = useCallback(() => {
    axios.get(`${url}${boardName}/cards`)
      .then((response) => {
        // Get the list of students
        const boardCards = response.data.map((card) => {
          return (
            <Card
              id={card.card.id}
              text={card.card.text}
              emojiName={card.card.emoji}
              onDeleteCallback={onDeleteCallback}
            />
          )
        });

        setCards(boardCards)
      })
      .catch((error) => {
        // Still need to handle errors
        setErrorMessage(error.response.data.cause);
      });
  }, []);

  useEffect (getCards);

  // add a card
  const onAddCard = card => {
    axios.post(BASE_URL + '/cards', card)
      .then(() => {
        getCards();
      })
      .catch((error) => {
        setErrorMessage(error.response.data.cause);
      });
  };


  // delete 
  const onDeleteCallback = (id) => {
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
        getCards(); // works but lag because it recalls the API
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
    <article>
      <div>{errorMessage}</div>
      <div className="board">
        <NewCardForm onAddCard={onAddCard} />
        {cards}
      </div>
    </article>
  )
};

Board.propTypes = {

};

export default Board;