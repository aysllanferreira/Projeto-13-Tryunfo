import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Form from './components/Form';

function App() {
  const [cardName, setCardName] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [cardAttr1, setCardAttr1] = useState();
  const [cardAttr2, setCardAttr2] = useState();
  const [cardAttr3, setCardAttr3] = useState();
  const [cardImage, setCardImage] = useState('');
  const [cardRare, setCardRare] = useState('normal');
  const [cardTrunfo, setCardTrunfo] = useState(false);
  const [turnBtn, setTurnBtn] = useState(true);

  useEffect(() => {
    const maxValue = 210;
    const sum = (+cardAttr1 + +cardAttr2 + +cardAttr3) > maxValue;
    if (cardName !== '' && cardDescription !== ''
    && cardAttr1 !== '' && cardAttr2 !== '' && cardAttr3 !== ''
    && cardImage !== '' && sum < maxValue) {
      setTurnBtn(false);
    } else {
      setTurnBtn(true);
    }
  }, [cardName, cardDescription, cardAttr1, cardAttr2,
    cardAttr3, cardImage, cardRare, cardTrunfo]);

  const verifyLength = (attr) => {
    const maxValue = 90;
    return (+attr < 0 || +attr > maxValue);
  };

  const isSaveButtonDisabled = () => {
    const verifyAttr = verifyLength(cardAttr1)
    || verifyLength(cardAttr2) || verifyLength(cardAttr3);

    const maxValue = 210;
    const sum = (+cardAttr1 + +cardAttr2 + +cardAttr3) > maxValue;

    return setTurnBtn(verifyAttr || sum);
  };

  const onInputChange = ({ target }) => {
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
    isSaveButtonDisabled();
  };

  const onSaveButtonClick = () => {
    console.log('Clicou no botão salvar');
  };

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
        isSaveButtonDisabled={ turnBtn }
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
    </div>
  );
}

export default App;
