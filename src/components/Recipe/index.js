import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Informations from 'src/components/Recipe/Informations';
import Instructions from 'src/components/Recipe/Instructions';
import Ingredients from 'src/components/Recipe/Ingredients';
import Image from 'src/components/Recipe/Image';

import './styles.scss';

const Recipe = ({ recipes }) => (
  <div className="recipe">
    <div className="recipe__block recipe__block--left">
      <Informations recipe={recipes[0]} />
      <Instructions instructions={recipes[0].instructions} />
    </div>

    <div className="recipe__block recipe__block--right">
      <Image image={recipes[0].picture} />
      <Ingredients ingredients={recipes[0].ingredients} />
    </div>
  </div>
);

Recipe.propTypes = {

};

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
