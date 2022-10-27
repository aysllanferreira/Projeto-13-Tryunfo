import React from 'react';
import PropTypes from 'prop-types';

function Filter({
  trunfoFilter, nameFilter, setNameFilter, rareFilter, setRareFilter, setTrunfoFilter,
}) {
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        disabled={ trunfoFilter }
        value={ nameFilter }
        onChange={ ({ target }) => setNameFilter(target.value) }
      />

      <select
        value={ rareFilter }
        disabled={ trunfoFilter }
        onChange={ ({ target }) => setRareFilter(target.value) }
        data-testid="rare-filter"
      >
        <option value="todas">todas</option>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>

      <input
        type="checkbox"
        data-testid="trunfo-filter"
        checked={ trunfoFilter }
        onChange={ ({ target }) => setTrunfoFilter(target.checked) }
      />

    </div>
  );
}

Filter.propTypes = {
  trunfoFilter: PropTypes.bool.isRequired,
  nameFilter: PropTypes.string.isRequired,
  setNameFilter: PropTypes.func.isRequired,
  rareFilter: PropTypes.string.isRequired,
  setRareFilter: PropTypes.func.isRequired,
  setTrunfoFilter: PropTypes.func.isRequired,
};

export default Filter;
