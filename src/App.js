import React, { useState } from 'react';
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

  const onInputChange = ({ target }) => {
    const { id, value, checked } = target;
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
    case 'trunfo':
      setCardTrunfo(checked);
      break;
    default:
      break;
    }
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
