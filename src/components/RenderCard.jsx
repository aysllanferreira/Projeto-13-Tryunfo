import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function RenderCard({
  name,
  description,
  attr1,
  attr2,
  attr3,
  image,
  rare,
  trunfo,
  deleteCard,
}) {
  return (
    <li key={ Math.random() }>
      <Card
        cardName={ name }
        cardDescription={ description }
        cardAttr1={ attr1 }
        cardAttr2={ attr2 }
        cardAttr3={ attr3 }
        cardImage={ image }
        cardRare={ rare }
        cardTrunfo={ trunfo }
      />

      <button
        type="button"
        data-testid="delete-button"
        value={ name }
        onClick={ deleteCard }
      >
        Excluir
      </button>
    </li>
  );
}

RenderCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attr1: PropTypes.number.isRequired,
  attr2: PropTypes.number.isRequired,
  attr3: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  rare: PropTypes.bool.isRequired,
  trunfo: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func.isRequired,
};
