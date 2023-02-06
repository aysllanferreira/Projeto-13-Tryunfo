import React from 'react';
import PropTypes from 'prop-types';

function Card({
  cardName,
  cardImage,
  cardDescription,
  cardAttr1,
  cardAttr2,
  cardAttr3,
  // cardRare,
  cardTrunfo,
}) {
  return (
    <div
      className="flex flex-col border-black border-2 rounded-md shadow-md p-2
      items-center justify-items-center justify-center text-center lg:w-[400px]
      md:w-[100%] mx-auto h-[700px]"
    >
      <h1
        data-testid="name-card"
        className="text-4xl mb-4"
      >
        {cardName}
      </h1>

      <div>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
          // center image
          className="w-[280px] h-[280px] rounded-[20px] mb-4 object-cover mx-auto"
        />

        <p
          data-testid="description-card"
          className="text-xl mb-4 w-[320px]"
        >
          {cardDescription}
        </p>
        <div>
          <p className="text-xl font-bold">
            Power:
          </p>
          <p
            data-testid="attr1-card"
            className="h-4 bg-blue-500 rounded-md mb-3"
            style={ { width: `${cardAttr1}%` } }
          />
        </div>
        <div>
          <p className="text-xl font-bold">
            Speed:
          </p>
          <p
            data-testid="attr1-card"
            className="h-4 bg-red-500 rounded-md mb-3"
            style={ { width: `${cardAttr2}%` } }
          />
        </div>
        <div>
          <p className="text-xl font-bold">
            Intelligence:
          </p>
          <p
            data-testid="attr1-card"
            className="h-4 bg-green-500 rounded-md mb-3"
            style={ { width: `${cardAttr3}%` } }
          />
        </div>
        {cardTrunfo
        && (
          <p
            data-testid="trunfo-card"
          >
            Super Trunfo
          </p>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  // cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
