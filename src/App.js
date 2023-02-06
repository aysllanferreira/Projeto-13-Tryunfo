/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import HandleRender from './components/HandleRender';
import Card from './components/Card';
import Filter from './components/Filter';
import Form from './components/Form';
import './style/App.css';

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
  const [nameFilter, setNameFilter] = useState('');
  const [rareFilter, setRareFilter] = useState('todas');
  const [trunfoFilter, setTrunfoFilter] = useState(false);

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

  const getNameByFilter = saveCard.filter(({ name }) => name.toLowerCase()
    .includes(nameFilter.toLowerCase()));

  const getRareFilter = getNameByFilter
    .filter(({ rare }) => rare === rareFilter || rareFilter === 'todas');

  const getTrunfoCards = saveCard.filter(({ trunfo }) => trunfo === true);

  const filters = trunfoFilter ? getTrunfoCards : getRareFilter;

  const deleteCard = ({ target }) => {
    const newCards = saveCard.filter(({ name }) => name !== target.value);
    setSaveCard(newCards);
    verifyTrunfo();
  };

  useEffect(() => {
    verifyTrunfo();
  }, [saveCard]);

  return (
    <div className="App">
      <h1>Tryunfo</h1>
      <div className="Render">
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
      </div>
      <Filter
        trunfoFilter={ trunfoFilter }
        nameFilter={ nameFilter }
        setNameFilter={ setNameFilter }
        rareFilter={ rareFilter }
        setRareFilter={ setRareFilter }
        setTrunfoFilter={ setTrunfoFilter }
      />

      {saveCard.length > 0 ? (
        <HandleRender
          filters={ filters }
          deleteCard={ deleteCard }
        />
      ) : null}
    </div>
  );
}

export default App;
