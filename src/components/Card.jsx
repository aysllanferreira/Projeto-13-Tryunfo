import React from 'react';
import PropTypes from 'prop-types';

function Card({
  cardName,
  cardDescription,
  cardAttr1,
  cardAttr2,
  cardAttr3,
  cardImage,
  cardRare,
  cardTrunfo,
}) {
  return (
    <div>
      <h1 data-testid="name-card">{ cardName }</h1>
      <img src={ cardImage } alt={ cardName } data-testid="image-card" />
      <p data-testid="description-card">{ cardDescription }</p>
      <p data-testid="attr1-card">{ cardAttr1 }</p>
      <p data-testid="attr2-card">{ cardAttr2 }</p>
      <p data-testid="attr3-card">{ cardAttr3 }</p>
      <p data-testid="rare-card">{ cardRare }</p>
      {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null}
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
