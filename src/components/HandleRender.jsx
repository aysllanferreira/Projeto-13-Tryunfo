import React from 'react';
import PropTypes from 'prop-types';
import RenderCard from './RenderCard';

export default function HandleRender({ deleteCard, filters }) {
  return (
    <ul className="flex flex-wrap justify-center gap-[25px]">
      {filters.map(({
        name,
        description,
        attr1,
        attr2,
        attr3,
        image,
        rare,
        trunfo,
      }) => (<RenderCard
        key={ Math.random() }
        name={ name }
        description={ description }
        attr1={ attr1 }
        attr2={ attr2 }
        attr3={ attr3 }
        image={ image }
        rare={ rare }
        trunfo={ trunfo }
        deleteCard={ deleteCard }
      />))}
    </ul>
  );
}

HandleRender.propTypes = {
  deleteCard: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    attr1: PropTypes.number.isRequired,
    attr2: PropTypes.number.isRequired,
    attr3: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rare: PropTypes.bool.isRequired,
    trunfo: PropTypes.bool.isRequired,
  })).isRequired,
};
