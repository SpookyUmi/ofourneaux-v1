/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ingredient.scss';

const IngredientForm = ({ categories }) => {
  const [ingredient, setIngredient] = useState('');
  const [category, setCategory] = useState('');

  console.log('categories =>', categories);

  return (
    <div className="ingredient__form">
      <input type="text" name="ingredient" placeholder="Ingredient"
        onChange={(event) => { setIngredient(event.target.value) }}
      />
      <select
        className="ingredient__select input"
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      >
        {categories.map(category => (
          <option value={category.id} key={category.id}>{category.name}</option>
        ))}
      </select>
    </div>
  );
}

// IngredientForm.propTypes = {
//   tags: PropTypes.arrayOf(PropTypes.object).isRequired,
//   tagField: PropTypes.string.isRequired,
//   updateTagField: PropTypes.func.isRequired,
//   addNewTag: PropTypes.func.isRequired,
//   deleteTag: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  tags: state.app.tags,
  tagField: state.admin.tagField,
  categories: state.app.categories
});

export default connect(mapStateToProps)(IngredientForm);
