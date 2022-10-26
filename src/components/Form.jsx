import React from 'react';

function Form() {
  return (
    <form>
      <input type="text" data-testid="name-input" />
      <textarea data-testid="description-input" cols="30" rows="10" />
      <input type="number" data-testid="attr1-input" />
      <input type="number" data-testid="attr2-input" />
      <input type="number" data-testid="attr3-input" />
      <input type="text" data-testid="image-input" />
      <select data-testid="rare-input">
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
      <input type="checkbox" data-testid="trunfo-input" />
      <button type="button" data-testid="save-button">Salvar</button>
    </form>
  );
}

export default Form;
