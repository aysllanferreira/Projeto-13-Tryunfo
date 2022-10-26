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
      />

      <textarea
        value={ cardDescription }
        onChange={ onInputChange }
        data-testid="description-input"
        cols="30"
        rows="10"
      />

      <input
        value={ cardAttr1 }
        onChange={ onInputChange }
        type="number"
        data-testid="attr1-input"
      />

      <input
        value={ cardAttr2 }
        onChange={ onInputChange }
        type="number"
        data-testid="attr2-input"
      />

      <input
        value={ cardAttr3 }
        onChange={ onInputChange }
        type="number"
        data-testid="attr3-input"
      />

      <input
        value={ cardImage }
        onChange={ onInputChange }
        type="text"
        data-testid="image-input"
      />

      <select value={ cardRare } onChange={ onInputChange } data-testid="rare-input">
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>

      <input
        checked={ cardTrunfo }
        onChange={ onInputChange }
        type="checkbox"
        data-testid="trunfo-input"
      />

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
