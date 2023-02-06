import React from 'react';
import PropTypes from 'prop-types';

function Filter({
  trunfoFilter, nameFilter, setNameFilter, rareFilter, setRareFilter, setTrunfoFilter,
}) {
  return (
    <div
      className="flex flex-col justify-center p-2 w-[200px] mx-auto gap-4 mt-[100px]
    mb-[100px]"
    >
      <h1 className="text-4xl font-bold mx-auto">Filters</h1>
      <label htmlFor="name-filter">
        Name:
        <input
          type="text"
          data-testid="name-filter"
          disabled={ trunfoFilter }
          value={ nameFilter }
          onChange={ ({ target }) => setNameFilter(target.value) }
          className="border border-gray-300 rounded-md shadow-sm
          focus:border-indigo-300 focus:ring focus:ring-indigo-200
          focus:ring-opacity-50 p-2 outline-orange-500"
        />
      </label>

      <label
        htmlFor="rare-filter"
        className="flex flex-col"
      >
        Rarity:

        <select
          value={ rareFilter }
          disabled={ trunfoFilter }
          onChange={ ({ target }) => setRareFilter(target.value) }
          data-testid="rare-filter"
          className="border border-gray-300 rounded-md shadow-sm
          focus:border-indigo-300 focus:ring focus:ring-indigo-200
          focus:ring-opacity-50 p-2 outline-orange-500"
        >
          <option value="todas">All</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Very Rare</option>
        </select>
      </label>

      <label
        htmlFor="trunfo-filter"
        className="flex flex-col mx-auto text-2xl text-center"
      >
        Super Trump:
        <input
          type="checkbox"
          data-testid="trunfo-filter"
          checked={ trunfoFilter }
          onChange={ ({ target }) => setTrunfoFilter(target.checked) }
          className="mx-auto w-6 h-6"
        />
      </label>

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
