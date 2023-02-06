import React from 'react';
import PropTypes from 'prop-types';

function Form({
  cardName,
  cardDescription,
  cardAttr1,
  cardAttr2,
  cardAttr3,
  cardImage,
  cardRare,
  cardTrunfo,
  hasTrunfo,
  isSaveButtonDisabled,
  onInputChange,
  onSaveButtonClick,
}) {
  return (
    <form className="flex flex-col w-[80%] mx-auto">
      <label
        htmlFor="name"
        className="text-2xl"
      >
        {' '}
        Name:
      </label>
      <input
        value={ cardName }
        onChange={ onInputChange }
        type="text"
        data-testid="name-input"
        id="name"
        placeholder="Character's Name"
        className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-300
          focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 outline-orange-500"
      />

      <label
        className="text-2xl"
        htmlFor="desc"
      >
        {' '}
        Description:

      </label>
      <textarea
        value={ cardDescription }
        onChange={ onInputChange }
        data-testid="description-input"
        cols="30"
        rows="10"
        id="desc"
        placeholder="Character's Description"
        className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-300
          focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 outline-orange-500
          resize-none h-20"
      />

      <label
        htmlFor="attr01"
        className="text-2xl"
      >
        Power:
        {' '}
      </label>
      <input
        value={ cardAttr1 }
        onChange={ onInputChange }
        type="number"
        min="0"
        max="100"
        data-testid="attr1-input"
        id="attr01"
        placeholder="Attribute 1"
        className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-300
          focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 outline-orange-500"
      />

      <label
        htmlFor="attr02"
        className="text-2xl"
      >
        {' '}
        Speed:

      </label>
      <input
        value={ cardAttr2 }
        onChange={ onInputChange }
        type="number"
        min="0"
        max="100"
        data-testid="attr2-input"
        id="attr02"
        placeholder="Attribute 2"
        className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-300
          focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 outline-orange-500"
      />

      <label
        htmlFor="attr03"
        className="text-2xl"
      >
        {' '}
        Inteligence:
        {' '}

      </label>
      <input
        value={ cardAttr3 }
        onChange={ onInputChange }
        type="number"
        min="0"
        max="100"
        data-testid="attr3-input"
        id="attr03"
        placeholder="Attribute 3"
        className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-300
          focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 outline-orange-500"
      />

      <label
        htmlFor="image"
        className="text-2xl"
      >
        {' '}
        Imagem:

      </label>
      <input
        value={ cardImage }
        onChange={ onInputChange }
        type="text"
        data-testid="image-input"
        id="image"
        placeholder="Image URL"
        className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-300
          focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 outline-orange-500"
      />

      <label
        htmlFor="raridade"
      >
        {' '}
        Rarity:
        {' '}

      </label>
      <select
        value={ cardRare }
        onChange={ onInputChange }
        data-testid="rare-input"
        id="raridade"
        className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-300
          focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 outline-orange-500"
      >
        <option value="normal">Normal</option>
        <option value="raro">Rare</option>
        <option value="muito raro">Super rare</option>
      </select>

      {
        hasTrunfo ? (
          <p>You already have a Super Trump in your deck</p>
        ) : (
          <div>
            <label
              data-testid="trunfo-filter"
              htmlFor="cardTrunfo"
              className="text-2xl text-center"
            >
              {' '}
              Super Trump:
            </label>
            <input
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />

          </div>
        )
      }

      <button
        disabled={ isSaveButtonDisabled }
        type="button"
        onClick={ onSaveButtonClick }
        data-testid="save-button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
          rounded cursor-pointer mt-6"
      >
        Save

      </button>

    </form>
  );
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
