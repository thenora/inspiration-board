import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';import axios from 'axios';

const App = () => {

  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const onDelete = id => {
    axios.delete("https://inspiration-board.herokuapp.com/cards/" + id)
      .then(() => {
        const cardsCopy = [...cards];
        for (let i = 0; i < cardsCopy.length; i++) {
          if (id === cardsCopy[i].card.id) { // if id is equal to the id of the card at the current ID 
            cardsCopy.splice(i, 1);
            setCards(cardsCopy);
            return;
          }
        }
        setErrorMessage('');
      })
      .catch((error) => {        
        setErrorMessage("Card ID #" + id + ": " + error.message);
      });    
  }
  
  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`nora-antonia`}
        onDelete={onDelete}
      />
    </section>
  );
};

export default App;
