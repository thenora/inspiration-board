import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

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

        setCards(boardCards);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.cause);
      });
  }, []);

  useEffect (getCards);

  // add a card
  const onAddCard = card => {
    axios.post(`${url}${boardName}/cards`, card)
      .then(() => {
        getCards();
      })
      .catch((error) => {
        setErrorMessage(error.response.data.errors.text);
      });
  };


  // delete a card
  const onDeleteCallback = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .then(() => {
        getCards(); // calls helper function to recall from API
      })
      
      .catch((error) => {
        setErrorMessage(error.response.data.cause);
      });
  };

  return (
    <article>
      <div className="validation-errors-display">
        {
          errorMessage !== "" ? errorMessage : null
        }
      </div>
      <div className="board">
        <NewCardForm onAddCard={onAddCard} />
        {cards}
      </div>
    </article>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;