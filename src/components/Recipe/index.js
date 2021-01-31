// YARN
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// icons
import Informations from 'src/components/Recipe/Informations';
import Instructions from 'src/components/Recipe/Instructions';
import Ingredients from 'src/components/Recipe/Ingredients';
import Image from 'src/components/Recipe/Image';

// SCSS
import './styles.scss';

// component
const Recipe = ({ recipe }) => {
  console.log(recipe);

  return (
    <div className="recipe">
      <div className="recipe__block recipe__block--left">
        <Informations
          title={recipe.title}
          description={recipe.description}
          tags={recipe.tags}
          preparationTime={recipe.preparation_time}
          bakingTime={recipe.baking_time}
          difficulty={recipe.difficulty}
          nutriScore={recipe.nutri_score}
        />
        <Instructions steps={recipe.steps} />
      </div>

      <div className="recipe__block recipe__block--right">
        <Image id={recipe.id} picture={recipe.picture_url} />
        <Ingredients ingredients={recipe.ingredients} />
      </div>
    </div>
  );
};

// PropTypes
Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    picture_url: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    difficulty: PropTypes.string,
    preparation_time: PropTypes.number,
    baking_time: PropTypes.number,
    nutri_score: PropTypes.string,
    date_creation: PropTypes.string,
    date_update: PropTypes.string,
    season: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    ingredients: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      quantity: PropTypes.number,
      unit: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      icon: PropTypes.string,
    })),
    steps: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, null)(Recipe);
