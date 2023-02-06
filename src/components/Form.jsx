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
    <form className="Form">
      <label htmlFor="name">
        {' '}
        Nome:
      </label>
      <input
        value={ cardName }
        onChange={ onInputChange }
        type="text"
        data-testid="name-input"
        id="name"
        placeholder="Nome do personagem"
      />

      <label htmlFor="desc">
        {' '}
        Descricao:

      </label>
      <textarea
        value={ cardDescription }
        onChange={ onInputChange }
        data-testid="description-input"
        cols="30"
        rows="10"
        id="desc"
        placeholder="Descrição do personagem"
      />

      <label htmlFor="attr01">
        Atributo 01:
        {' '}
      </label>
      <input
        value={ cardAttr1 }
        onChange={ onInputChange }
        type="number"
        min="0"
        max="90"
        data-testid="attr1-input"
        id="attr01"
        placeholder="Atributo 1"
      />

      <label htmlFor="attr02">
        {' '}
        Atributo 02:

      </label>
      <input
        value={ cardAttr2 }
        onChange={ onInputChange }
        type="number"
        min="0"
        max="90"
        data-testid="attr2-input"
        id="attr02"
        placeholder="Atributo 2"
      />

      <label htmlFor="attr03">
        {' '}
        Atributo 03:
        {' '}

      </label>
      <input
        value={ cardAttr3 }
        onChange={ onInputChange }
        type="number"
        min="0"
        max="90"
        data-testid="attr3-input"
        id="attr03"
        placeholder="Atributo 3"
      />

      <label htmlFor="image">
        {' '}
        Imagem:

      </label>
      <input
        value={ cardImage }
        onChange={ onInputChange }
        type="text"
        data-testid="image-input"
        id="image"
        placeholder="URL da imagem"
      />

      <label htmlFor="raridade">
        {' '}
        Raridade:
        {' '}

      </label>
      <select
        value={ cardRare }
        onChange={ onInputChange }
        data-testid="rare-input"
        id="raridade"
      >
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>

      {
        hasTrunfo ? (
          <p>Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <div>
            <label data-testid="trunfo-filter" htmlFor="cardTrunfo">
              {' '}
              Super Trunfo:
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
