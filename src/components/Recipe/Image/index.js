import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import trash from 'src/assets/icons/delete.svg';
import modifier from 'src/assets/icons/modifier.svg';
import heartLine from 'src/assets/icons/heart-line.svg';

import './styles.scss';

const Image = ({
  id,
  picture,
  handleEditOrDeleteRecipe,
}) => (
  <div className="image">
  {/* TODO: put the icons in white */}
    <div className="image__icons">
      <div className="image__icons__admin">
      {/* TODO: check that the dynamic link works after deployment */}
        <NavLink
          exact
          to={{
            pathname: `/admin/modification-recette/${id}`,
          }}
          onClick={handleEditOrDeleteRecipe}
        >
          <img className="image__icon" src={trash} alt="Icône de poubelle" />
        </NavLink>
        {/* TODO: check that the dynamic link works after deployment */}
        <NavLink
          exact
          to={{
            pathname: `/admin/modification-recette/${id}`,
          }}
          onClick={handleEditOrDeleteRecipe}
        >
          <img className="image__icon" src={modifier} alt="Icône de crayon" />
        </NavLink>
      </div>
      {/* TODO: at the click, the icon change to fill up */}
      <img className="image__icon" src={heartLine} alt="Icône de coeur vide" />
    </div>
    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
    <img className="image__recipe" src={picture} alt="Photo de la recette" />
  </div>
);

Image.propTypes = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  handleEditOrDeleteRecipe: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  id: state.recipe.id,
  picture: state.recipe.picture,
});

const mapDispatchToProps = (dispatch) => ({
  handleEditRecipe: () => {
    dispatch({
      type: 'SEND_EDIT/DELETE_RECIPE_REQUEST',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Image);
