import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Form from './components/Form';

function App() {
  const [cardName, setCardName] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [cardAttr1, setCardAttr1] = useState(0);
  const [cardAttr2, setCardAttr2] = useState(0);
  const [cardAttr3, setCardAttr3] = useState(0);
  const [cardImage, setCardImage] = useState('');
  const [cardRare, setCardRare] = useState('normal');
  const [cardTrunfo, setCardTrunfo] = useState(false);
  const [saveCard, setSaveCard] = useState([]);
  const [hasTrunfo, setHasTrunfo] = useState(false);

  const verifyTrunfo = () => {
    if (saveCard.length === 0) setHasTrunfo(false);
    if (saveCard.some(({ trunfo }) => trunfo === true)) setHasTrunfo(true);
    else setHasTrunfo(false);
  };

  const onInputChange = ({ target }) => {
    verifyTrunfo();
    const { id, value, checked } = target;
    if (checked) setCardTrunfo(checked);
    else setCardTrunfo(false);
    switch (id) {
    case 'name':
      setCardName(value);
      break;
    case 'desc':
      setCardDescription(value);
      break;
    case 'attr01':
      setCardAttr1(value);
      break;
    case 'attr02':
      setCardAttr2(value);
      break;
    case 'attr03':
      setCardAttr3(value);
      break;
    case 'image':
      setCardImage(value);
      break;
    case 'raridade':
      setCardRare(value);
      break;

    default:
      break;
    }
    verifyTrunfo();
  };

  const sum = 210;
  const indSum = 90;

  const verifySize = () => !cardName
    || !cardImage
    || !cardDescription
    || +cardAttr1 + +cardAttr2 + +cardAttr3 > sum
    || [cardAttr1, cardAttr2, cardAttr3].some((attr) => attr < 0)
    || [cardAttr1, cardAttr2, cardAttr3].some((attr) => attr > indSum);

  const onSaveButtonClick = () => {
    const card = {
      name: cardName,
      description: cardDescription,
      attr01: cardAttr1,
      attr02: cardAttr2,
      attr03: cardAttr3,
      image: cardImage,
      rare: cardRare,
      trunfo: cardTrunfo,
    };
    setSaveCard((prev) => [...prev, card]);

    setCardName('');
    setCardDescription('');
    setCardImage('');
    setCardAttr1(0);
    setCardAttr2(0);
    setCardAttr3(0);
    setCardRare('normal');
  };

  const deleteCard = ({ target }) => {
    const newCards = saveCard.filter(({ name }) => name !== target.value);
    setSaveCard(newCards);
    verifyTrunfo();
  };

  useEffect(() => {
    verifyTrunfo();
  }, [saveCard]);

  return (
    <div>
      <h1>Tryunfo</h1>
      <Form
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
        onInputChange={ onInputChange }
        onSaveButtonClick={ onSaveButtonClick }
        isSaveButtonDisabled={ verifySize() }
        hasTrunfo={ hasTrunfo }
      />

      <Card
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
        onInputChange={ onInputChange }
        onSaveButtonClick={ onSaveButtonClick }
      />
      {saveCard.length > 0 ? (
        <ul>
          {saveCard.map((card) => (
            <li key={ Math.random() }>
              <Card
                cardName={ card.name }
                cardDescription={ card.description }
                cardAttr1={ card.attr1 }
                cardAttr2={ card.attr2 }
                cardAttr3={ card.attr3 }
                cardImage={ card.image }
                cardRare={ card.rare }
                cardTrunfo={ card.trunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                value={ card.name }
                onClick={ deleteCard }
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default App;
