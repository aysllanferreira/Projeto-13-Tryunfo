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
    <form>
      <input
        value={ cardName }
        onChange={ onInputChange }
        type="text"
        data-testid="name-input"
        id="name"
      />

      <textarea
        value={ cardDescription }
        onChange={ onInputChange }
        data-testid="description-input"
        cols="30"
        rows="10"
        id="desc"
      />

      <input
        value={ cardAttr1 }
        onChange={ onInputChange }
        type="number"
        min="0"
        max="90"
        data-testid="attr1-input"
        id="attr01"
      />

      <input
        value={ cardAttr2 }
        onChange={ onInputChange }
        type="number"
        min="0"
        max="90"
        data-testid="attr2-input"
        id="attr02"
      />

      <input
        value={ cardAttr3 }
        onChange={ onInputChange }
        type="number"
        min="0"
        max="90"
        data-testid="attr3-input"
        id="attr03"
      />

      <input
        value={ cardImage }
        onChange={ onInputChange }
        type="text"
        data-testid="image-input"
        id="image"
      />

      <select value={ cardRare } onChange={ onInputChange } data-testid="rare-input">
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>

      {
        hasTrunfo ? (
          <p>Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <label htmlFor="cardTrunfo">
            Super Trunfo
            <input
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        )
      }

      <button
        disabled={ isSaveButtonDisabled }
        type="button"
        onClick={ onSaveButtonClick }
        data-testid="save-button"
      >
        Salvar

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
